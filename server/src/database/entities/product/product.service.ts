import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import SignInDto from '../../../types/dto/sign-in.dto';
import SignUpDto from '../../../types/dto/sign-up.dto';
import { Product } from './product.entity';
import { REPOSITORY_NAME } from './product.provider';
import ProductDto from '../../../types/dto/product.dto';
import EditProductDto from '../../../types/dto/edit-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @Inject(REPOSITORY_NAME)
    private productRepository: Repository<Product>,
  ) {}

  async create(args: ProductDto): Promise<Product> {
    const date = new Date(Date.now()).toDateString();
    const entity = this.productRepository.create({
      ...args,
      lastFill: date,
    });
    return await this.productRepository.save(entity);
  }



  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async findOneById(id: number) {
    return await this.productRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(args: EditProductDto): Promise<Product | false> {
    let entity = await this.productRepository.findOne({
      where: {
        id: args.id,
      },
    });
    if (!entity) return false;
    entity = {
      ...entity,
      ...args,
    };
    return await this.productRepository.save(entity);
  }

  async remove(id: number): Promise<Product | false> {
    const product = await this.productRepository.findOne({
      where: {
        id,
      },
    });
    if (!product) return false;
    return await this.productRepository.remove(product);
  }
}
