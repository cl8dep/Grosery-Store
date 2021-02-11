import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AccountController } from './account/account.controller';
import { AccountModule } from './database/entities/account/account.module';
import { AuthModule } from './auth/auth.module';
import ServicesModule from './services/services.module';
import { AuthMiddleware } from './auth/middleware/auth.middleware';

@Module({
  imports: [DatabaseModule, AccountModule, AuthModule, ServicesModule],
  controllers: [AccountController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
