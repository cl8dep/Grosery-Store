import { Connection, Repository } from 'typeorm';
import Account from './account.entity';

export const REPOSITORY_NAME = 'ACCOUNTS_REPOSITORY';

export const AccountProvider = [
  {
    provide: REPOSITORY_NAME,
    useFactory: (connection: Connection) => connection.getRepository(Account),
    inject: ['DATABASE_CONNECTION'],
  },
];
