import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AccountModule } from './database/entities/account/account.module';
import { AuthModule } from './auth/auth.module';
import ServicesModule from './services/services.module';
import { AuthMiddleware } from './auth/middleware/auth.middleware';
import AccountController from './controllers/account.controller';
import ProductsController from './controllers/products.controller';
import ProductModule from './database/entities/product/product.module';
import CartController from './controllers/cart.controller';
import ProductCartModule from './database/entities/product-cart/product-cart.module';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    ServicesModule,
    AccountModule,
    ProductModule,
    ProductCartModule
  ],
  controllers: [AccountController, ProductsController, CartController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
