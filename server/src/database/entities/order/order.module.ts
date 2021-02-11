import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database.module';
import { OrderProvider } from './order.provider';
import OrderService from './order.service';

@Module({
  imports: [DatabaseModule],
  providers: [...OrderProvider, OrderService],
  exports: [OrderService],
})
export class OrderModule {}
