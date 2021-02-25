import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { IUser } from '../../types/user.interface';
import { AccountService } from '../../database/entities/account/account.service';
import { AccountRole } from '../../database/entities/account/account.entity';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private jwtService: JwtService,
    private accountService: AccountService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const tokenHeader = req.headers['authorization'];
    if (tokenHeader) {
      const tokenArgs = tokenHeader.split(' ');
      if (tokenArgs.length === 2) {
        const payload = this.jwtService.decode(tokenArgs[1]) as any;
        const role = await this.accountService.getRole(payload.sub);
        if (role !== false) {
          req.user = {
            id: payload.sub,
            email: payload.email,
            role: role,
          } as IUser;
        }
      }
    }

    next();
  }
}
