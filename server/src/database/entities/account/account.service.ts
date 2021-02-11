import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import Account, { AccountRole } from './account.entity';
import { REPOSITORY_NAME } from './account.provider';
import SignInDto from '../../../account/dto/sign-in.dto';
import SignUpDto from '../../../account/dto/sign-up.dto';
import AccountRoleDto from '../../../types/dto/account-role.dto';

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

  async remove(id: string): Promise<Account | boolean> {
    const account = await this.accountRepository.findOne({
      where: {
        id,
      },
    });
    if (account) {
      return await this.accountRepository.remove(account);
    }

    return false;
  }

  async changeRole(id: string, role?: AccountRole): Promise<Account | boolean> {
    const account = await this.accountRepository.findOne({
      where: {
        id: id,
      },
    });
    if (account) {
      account.role = role
        ? role
        : account.role === AccountRole.ADMIN
        ? AccountRole.USER
        : AccountRole.ADMIN;
      return await this.accountRepository.save(account);
    } else return false;
  }

  async getRole(id: string): Promise<AccountRole | false> {
    const account = await this.accountRepository.findOne({
      where: {
        id,
      },
    });
    if (account) {
      return account.role;
    }
    return false;
  }
}
