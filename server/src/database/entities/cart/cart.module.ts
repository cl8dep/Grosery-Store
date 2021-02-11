import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database.module';
import { CartProvider } from './cart.provider';
import CartService from './cart.service';

@Module({
  imports: [DatabaseModule],
  providers: [...CartProvider, CartService],
  exports: [CartService],
})
export class OrderModule {}
