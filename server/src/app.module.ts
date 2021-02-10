import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AccountController } from './account/account.controller';
import { AccountModule } from './database/entities/account/account.module';
import { AuthModule } from './auth/auth.module';
import ServicesModule from './services/services.module';

@Module({
  imports: [DatabaseModule, AccountModule, AuthModule, ServicesModule],
  controllers: [AppController, AccountController],
  providers: [AppService],
})
export class AppModule {}
