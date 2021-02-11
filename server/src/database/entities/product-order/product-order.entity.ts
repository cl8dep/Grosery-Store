import { Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Product } from '../product/product.entity';

@Entity()
export default class ProductOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Product)
  product: Product;

  quantity: number;
}
