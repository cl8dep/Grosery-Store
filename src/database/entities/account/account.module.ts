import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database.module';
import { AccountProvider } from './account.provider';
import { AccountService } from './account.service';

@Module({
  imports: [DatabaseModule],
  providers: [...AccountProvider, AccountService],
  exports: [AccountService],
})
export class AccountModule {}
