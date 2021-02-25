import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { REPOSITORY_NAME } from './product-cart.provider';
import ProductCart from './product-cart.entity';

@Injectable()
export class ProductCartService {
  constructor(
    @Inject(REPOSITORY_NAME)
    private productCartRepository: Repository<ProductCart>,
  ) {}

  async create(save = false): Promise<ProductCart> {
    const entity = this.productCartRepository.create();
    if (save)
      await this.productCartRepository.save(entity);

    return entity;
  }

  async createOrFind(cartId: string, productId: number) {
    const exitEntity = await this.productCartRepository.findOne({
      where: {
        cart: {
          id: cartId
        },
        product: {
          id: productId
        }
      }
    });
    if (exitEntity)
      return exitEntity;

    return this.productCartRepository.create();
  }


  async remove(productCart: ProductCart) {
    return await this.productCartRepository.remove(productCart);
  }


}
