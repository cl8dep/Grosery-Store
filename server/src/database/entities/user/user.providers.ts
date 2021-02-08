import { Connection, Repository } from 'typeorm';
import { User } from './user.entity';

export const REPOSITORY_NAME = 'USER_REPOSITORY';

export const userProviders = [
  {
    provide: REPOSITORY_NAME,
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: ['DATABASE_CONNECTION'],
  },
];
