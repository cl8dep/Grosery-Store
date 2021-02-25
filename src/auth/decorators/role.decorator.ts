import { SetMetadata } from '@nestjs/common';
import { AccountRole } from '../../database/entities/account/account.entity';

export const ROLE_KEY = 'role';
export const Role = (role: AccountRole) => SetMetadata(ROLE_KEY, role);
