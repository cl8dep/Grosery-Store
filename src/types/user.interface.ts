import { AccountRole } from '../database/entities/account/account.entity';

export interface IUser {
  id: string;
  email: string;
  role: AccountRole;
}
