import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AccountModule } from '../database/entities/account/account.module';
import { RoleGuardProvider } from './guards/role.guard';
import { JwtStrategy } from './strategies/jwt.strategy';
import AuthService from './auth.service';

@Module({
  imports: [
    AccountModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, JwtStrategy, RoleGuardProvider],
  exports: [AuthService, JwtModule, JwtStrategy],
})
export class AuthModule {}
