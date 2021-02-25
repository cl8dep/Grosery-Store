import { Module } from '@nestjs/common';
import HashingService from './hashing.service';
import BusinessService from './bussines.service';
import { AccountModule } from '../database/entities/account/account.module';
import { CartModule } from '../database/entities/cart/cart.module';
import ProductModule from '../database/entities/product/product.module';
import ProductCartModule from '../database/entities/product-cart/product-cart.module';

@Module({
  imports: [AccountModule, CartModule, ProductModule, ProductCartModule],
  providers: [BusinessService, HashingService],
  exports: [BusinessService, HashingService],
})
class ServicesModule {}

export default ServicesModule;
