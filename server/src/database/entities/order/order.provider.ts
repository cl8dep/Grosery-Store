import { Connection} from 'typeorm';
import Order from './order.entity';

export const REPOSITORY_NAME = 'ORDERS_REPOSITORY';

export const OrderProvider = [
  {
    provide: REPOSITORY_NAME,
    useFactory: (connection: Connection) => connection.getRepository(Order),
    inject: ['DATABASE_CONNECTION'],
  },
];
