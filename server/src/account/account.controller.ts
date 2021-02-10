import { Controller, Get, Post, Body, Param, Res } from '@nestjs/common';
import SignInDto from './dto/sign-in.dto';
import SignUpDto from './dto/sign-up.dto';
import { AccountService } from '../database/entities/account/account.service';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import HashingService from '../services/security/HashingService';
import { ApiOkResponse, ApiResponse } from '@nestjs/swagger';

@Controller('account')
export class AccountController {
  constructor(
    private readonly accountService: AccountService,
    private jwtService: JwtService,
    private hashingService: HashingService,
  ) {}

  @Post('sign-in')
  async signIn(@Body() body: SignInDto, @Res() res: Response) {
    const account = await this.accountService.findOne(body);
    const passwordComparation = await this.hashingService.compare(
      body.password,
      account.password,
    );

    if (passwordComparation) {
      const token = this.jwtService.sign({
        sub: account.id,
        email: account.email,
      });
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
    const token = this.jwtService.sign({
      sub: account.id,
      email: account.email,
    });
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

  @Post('delete-account')
  deleteAccount(@Param('id') id: string) {
    return this.accountService.remove(+id);
  }
}
