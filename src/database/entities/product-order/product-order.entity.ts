import { Entity, PrimaryGeneratedColumn, OneToOne, JoinTable } from 'typeorm';
import { Product } from '../product/product.entity';

@Entity()
export default class ProductOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Product, {cascade: true})
  @JoinTable()
  product: Product;

  quantity: number;
}
