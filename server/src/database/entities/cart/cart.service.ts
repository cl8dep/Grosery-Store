import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import Cart from './cart.entity';
import { REPOSITORY_NAME } from './cart.provider';
import SignInDto from '../../../account/dto/sign-in.dto';
import SignUpDto from '../../../account/dto/sign-up.dto';

@Injectable()
export default class OrderService {
  constructor(
    @Inject(REPOSITORY_NAME)
    private accountRepository: Repository<Cart>,
  ) {}

  async create(args: SignUpDto): Promise<Cart> {
    //TODO: create order
    return;
  }

  findAll() {
    return `This action returns all account`;
  }

  async findOne(args: SignInDto): Promise<Cart> {
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
