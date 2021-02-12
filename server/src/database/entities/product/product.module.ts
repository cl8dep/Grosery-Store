import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database.module';
import { ProductService } from './product.service';
import { ProductProvider } from './product.provider';

@Module({
  imports: [DatabaseModule],
  providers: [ProductProvider, ProductService],
  exports: [ProductService],
})
export default class ProductModule {}
