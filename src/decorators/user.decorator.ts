import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { IUser } from '../types/user.interface';

export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;

    return user as IUser;
  },
);
