import { Connection } from 'typeorm';
import Cart from './cart.entity';

export const REPOSITORY_NAME = 'CART_REPOSITORY';

export const CartProvider = {
  provide: REPOSITORY_NAME,
  useFactory: (connection: Connection) => connection.getRepository(Cart),
  inject: ['DATABASE_CONNECTION'],
};
