import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { OAuth2Client } from 'google-auth-library';
import BusinessService from '../services/bussines.service';
import { AccountService } from '../database/entities/account/account.service';
import GoogleAuthDto from '../types/dto/google.auth.dto';
import AuthService from '../auth/auth.service';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

@ApiTags('Auth')
@Controller('auth')
class AuthController {

  constructor(
    private readonly accountService: AccountService,
    private readonly businessService: BusinessService,
    private authService: AuthService,
  )
  {}

  @Post("google")
  async googleAuth(@Body() body: GoogleAuthDto, @Res() res: Response) {
    const ticket = await client.verifyIdToken({
      idToken: body.token,
      audience: process.env.CLIENT_ID
    });

    const { email, picture, given_name, family_name } = ticket.getPayload();

    let account;
    let token;
    account = await this.accountService.findOne(email);
    if (!account && body.create) {
      account = await this.businessService.create({
        email,
        firstName: given_name,
        lastName: family_name,
        picture
      });
    } else {
      return res.status(403).end();
    }

    token = this.authService.signIn(account);
    res.status(200).json({
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
    })
  }
}

export default AuthController;
