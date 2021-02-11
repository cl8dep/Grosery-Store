import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import ProductOrder from '../product-order/product-order.entity';

@Entity({ name: 'carts' })
class Cart {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(() => ProductOrder)
  products: ProductOrder[];

  @CreateDateColumn()
  createDate: string;

  @UpdateDateColumn()
  updateDate: string;
}

export default Cart;
