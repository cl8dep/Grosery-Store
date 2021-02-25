import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database.module';
import { ProductCartService } from './product-cart.service';
import { ProductCartProvider } from './product-cart.provider';

@Module({
  imports: [DatabaseModule],
  providers: [ProductCartProvider, ProductCartService],
  exports: [ProductCartService],
})
export default class ProductCartModule {}
