import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Res,
  UseGuards,
  Delete,
} from '@nestjs/common';
import SignInDto from './dto/sign-in.dto';
import SignUpDto from './dto/sign-up.dto';
import { AccountService } from '../database/entities/account/account.service';
import { Response } from 'express';
import HashingService from '../services/security/HashingService';
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

@ApiTags('Account')
@Controller('account')
export class AccountController {
  constructor(
    private readonly accountService: AccountService,
    private authService: AuthService,
    private hashingService: HashingService,
  ) {}

  @Post('sign-in')
  async signIn(@Body() body: SignInDto, @Res() res: Response) {
    const account = await this.accountService.findOne(body);
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
          email: account.lastName,
          role: account.role,
          isActive: account.isActive,
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
    status: 200,
    description: 'The account has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post('sign-up')
  async signUp(@Body() body: SignUpDto, @Res() res: Response) {
    body.password = await this.hashingService.computeHash(body.password);
    const account = await this.accountService.create(body);
    const token = this.authService.signIn(account);

    return res.status(200).json({
      access_token: token,
      account: {
        firstName: account.firstName,
        lastName: account.lastName,
        email: account.lastName,
        role: account.role,
        isActive: account.isActive,
        cellphone: account.cellphone,
        address: account.address,
      },
    });
  }

  @Get('recover-account')
  recoverAccount(@Param('id') id: string) {
    //return this.accountService.findOne(id);
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
