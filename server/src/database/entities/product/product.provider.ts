import { Connection } from 'typeorm';
import { Product } from './product.entity';

export const REPOSITORY_NAME = 'PRODUCT_REPOSITORY';

export const ProductProvider = {
  provide: REPOSITORY_NAME,
  useFactory: (connection: Connection) => connection.getRepository(Product),
  inject: ['DATABASE_CONNECTION'],
};
