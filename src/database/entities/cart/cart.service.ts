import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import Cart from './cart.entity';
import { REPOSITORY_NAME } from './cart.provider';
import ProductOrder from '../product-order/product-order.entity';

@Injectable()
export default class CartService {
  constructor(
    @Inject(REPOSITORY_NAME)
    private cartRepository: Repository<Cart>,
  ) {}

  async create(save = false): Promise<Cart> {
    const entity = this.cartRepository.create();
    if (save) await this.cartRepository.save(entity);

    return entity;
  }

  findAll() {
    return `This action returns all account`;
  }

  findOne() {}

  update(id: number) {
    return `This action updates a #${id} account`;
  }

  remove(entity: Cart) {
    return "";
  }
}
