import { Connection} from 'typeorm';
import ProductCart from './product-cart.entity';

export const REPOSITORY_NAME = 'PRODUCT-CART_REPOSITORY';

export const ProductCartProvider = {
  provide: REPOSITORY_NAME,
  useFactory: (connection: Connection) => connection.getRepository(ProductCart),
  inject: ['DATABASE_CONNECTION'],
};
