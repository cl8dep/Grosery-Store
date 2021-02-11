import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import Order from './order.entity';
import { REPOSITORY_NAME } from './order.provider';
import SignInDto from '../../../account/dto/sign-in.dto';
import SignUpDto from '../../../account/dto/sign-up.dto';

@Injectable()
export default class OrderService {
  constructor(
    @Inject(REPOSITORY_NAME)
    private accountRepository: Repository<Order>,
  ) {}

  async create(args: SignUpDto): Promise<Order> {
    //TODO: create order
    return;
  }

  findAll() {
    return `This action returns all account`;
  }

  async findOne(args: SignInDto): Promise<Order> {
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
