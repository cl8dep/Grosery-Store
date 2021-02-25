import { Connection} from 'typeorm';
import ProductOrder from './product-order.entity';

export const REPOSITORY_NAME = 'PRODUCT-ORDER_REPOSITORY';

export const productProviders = [
  {
    provide: REPOSITORY_NAME,
    useFactory: (connection: Connection) => connection.getRepository(ProductOrder),
    inject: ['DATABASE_CONNECTION'],
  },
];
