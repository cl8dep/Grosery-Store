import { Test, TestingModule } from '@nestjs/testing';
import { AccountController } from './account.controller';
import { AccountService } from '../database/entities/account/account.service';
import { AccountProvider } from '../database/entities/account/account.provider';
import { AccountModule } from '../database/entities/account/account.module';
import { JwtService } from '@nestjs/jwt';
import { AuthModule } from '../auth/auth.module';
import HashingService from '../services/security/HashingService';

describe('AccountController', () => {
  let controller: AccountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AccountModule, AuthModule],
      controllers: [AccountController],
      providers: [HashingService],
    }).compile();

    controller = module.get<AccountController>(AccountController);
  });

  it('should be defined', () => {
    expect(controller.accountRole('1669639d-5d31-4186-b85f-3bad707f0d17'));
  });
});
