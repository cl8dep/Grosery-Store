import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Res,
  UseGuards,
  Delete, HttpStatus,
} from '@nestjs/common';
import SignInDto from '../types/dto/sign-in.dto';
import SignUpDto from '../types/dto/sign-up.dto';
import { AccountService } from '../database/entities/account/account.service';
import { Response } from 'express';
import HashingService from '../services/hashing.service';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import Account, {
  AccountRole,
} from '../database/entities/account/account.entity';
import { Role } from '../auth/decorators/role.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import AuthService from '../auth/auth.service';
import AccountRoleDto from '../types/dto/account-role.dto';
import { User } from '../decorators/user.decorator';
import { IUser } from '../types/user.interface';
import BusinessService from '../services/bussines.service';
import EditAccountDto from '../types/dto/edit-account.dto';

@ApiTags('Account')
@Controller('account')
class AccountController {
  constructor(
    private readonly accountService: AccountService,
    private readonly businessService: BusinessService,
    private authService: AuthService,
    private hashingService: HashingService,
  ) {}

  @Post('sign-in')
  async signIn(@Body() body: SignInDto, @Res() res: Response) {
    const account = await this.accountService.findOne(body.email);
    if (!account) return res.status(403).end();

    const passwordComparision = await this.hashingService.compare(
      body.password,
      account.password,
    );

    if (passwordComparision) {
      const token = this.authService.signIn(account);
      return res.status(200).json({
        access_token: token,
        account: {
          firstName: account.firstName,
          lastName: account.lastName,
          email: account.email,
          role: account.role,
          status: account.status,
          cellphone: account.cellphone,
          address: account.address,
        },
      });
    } else {
      res
        .status(400)
        .end('Not exist any account with the provided credentials');
    }
  }

  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The account has been successfully created.',
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: 'Existing account with the provided email'
  })
  @Post('sign-up')
  async signUp(@Body() body: SignUpDto, @Res() res: Response) {
    body.password = await this.hashingService.computeHash(body.password);
    const result = await this.businessService.create(body);
    const token = this.authService.signIn(result);
    return res.status(201).json({
      access_token: token,
      account: {
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.lastName,
        role: result.role,
        status: result.status,
        cellphone: result.cellphone,
        address: result.address,
      },
    });
  }

  @Get('recover-account')
  recoverAccount(@Param('id') id: string) {
    //return this.accountService.findOne(id);
  }

  @ApiBearerAuth()
  @Post()
  async editAccount(@Body() body: EditAccountDto, @User() user: IUser, @Res() res: Response) {
    const editedAccount = await this.businessService.editAccount(body, user.id);
    const {id, password, ...rest} = editedAccount;
    return res.status(200).json(rest);
  }

  @ApiBearerAuth()
  @Role(AccountRole.ADMIN)
  @UseGuards(JwtAuthGuard)
  @Post('role')
  async accountRole(
    @Body() body: AccountRoleDto,
    @User() user: IUser,
    @Res() res: Response,
  ) {
    const result = await this.accountService.changeRole(user.id, body.role);
    if (result instanceof Account) {
      res.status(200).json({
        role: result.role,
      });
    } else {
      res.status(404).end('Not exist an account with the provided id');
    }
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  async deleteAccount(@User() user: IUser, @Res() res: Response) {
    const result = await this.accountService.remove(user.id);
    if (result instanceof Account) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  }
}

export default AccountController;
