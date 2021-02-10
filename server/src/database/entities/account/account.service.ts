import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import Account from './account.entity';
import { REPOSITORY_NAME } from './accountProvider';
import SignInDto from '../../../account/dto/sign-in.dto';
import SignUpDto from '../../../account/dto/sign-up.dto';

@Injectable()
export class AccountService {
  constructor(
    @Inject(REPOSITORY_NAME)
    private accountRepository: Repository<Account>,
  ) {}

  async create(args: SignUpDto): Promise<Account> {
    const entity = this.accountRepository.create({
      firstName: args.firstName,
      lastName: args.lastName,
      address: args.address,
      cellphone: args.cellphone,
      password: args.password,
      email: args.email,
    });
    return await this.accountRepository.save(entity);
  }

  findAll() {
    return `This action returns all account`;
  }

  async findOne(args: SignInDto): Promise<Account> {
    return await this.accountRepository.findOne({
      where: {
        email: args.email,
      },
    });
  }

  update(id: number, updateAccountDto: SignUpDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
