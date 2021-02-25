import { Injectable } from '@nestjs/common';
import { IJwtAccountData } from '../database/entities/account/account.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
class AuthService {
  constructor(private jwtService: JwtService) {}

  signIn(account: IJwtAccountData): any {
    return this.jwtService.sign({
      sub: account.id,
      email: account.email
    });
  }
}

export default AuthService;
