import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database.module';
import CartService from './cart.service';
import { CartProvider } from './cart.provider';

@Module({
  imports: [DatabaseModule],
  providers: [CartProvider, CartService],
  exports: [CartService, CartProvider],
})
export class CartModule {}
