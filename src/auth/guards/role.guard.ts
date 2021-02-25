import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { APP_GUARD, Reflector } from '@nestjs/core';
import { ROLE_KEY } from '../decorators/role.decorator';
import { AccountRole } from '../../database/entities/account/account.entity';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<AccountRole>(
      ROLE_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!requiredRoles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    return user && user.role === requiredRoles;
  }
}

export const RoleGuardProvider = {
  provide: APP_GUARD,
  useClass: RoleGuard,
};
