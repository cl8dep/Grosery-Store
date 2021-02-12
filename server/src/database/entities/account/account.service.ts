import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { QueryFailedError, Repository } from 'typeorm';
import Account, { AccountRole } from './account.entity';
import { REPOSITORY_NAME } from './account.provider';
import SignUpDto from '../../../types/dto/sign-up.dto';
import Cart from '../cart/cart.entity';

@Injectable()
export class AccountService {
  constructor(
    @Inject(REPOSITORY_NAME)
    private accountRepository: Repository<Account>,
  ) {}

  async create(args: SignUpDto, cart: Cart): Promise<Account > {
    try {
      const entity = this.accountRepository.create({
        firstName: args.firstName,
        lastName: args.lastName,
        address: args.address,
        cellphone: args.cellphone,
        password: args.password,
        email: args.email,
      });
      entity.cart = cart;
      return await this.accountRepository.save(entity);
    } catch (e) {
      let message;
      if (e.code === "ER_DUP_ENTRY") message = "There is an account with the provided email";
      throw new HttpException({
        status: HttpStatus.CONFLICT,
        message,
      }, HttpStatus.CONFLICT);
    }
  }

  findAll() {
    return `This action returns all account`;
  }

  /**
   * Find an account with the provided email associated
   * @param email Email associated to the account
   */
  async findOne(email: string): Promise<Account> {
    return await this.accountRepository.findOne({
      where: {
        email: email,
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

  async findOneById(id: string) {
    return await this.accountRepository.findOne({
      where: {
        id,
      },
    });
  }

  async addProductToCart(userId: string, product: any): Promise<Cart> {
    const account = await this.findOneById(userId);



    return account.cart;
  }

  async save(entity: Account): Promise<Account> {
    return await this.accountRepository.save(entity);
  }
}
