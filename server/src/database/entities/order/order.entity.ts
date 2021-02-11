import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Account from '../account/account.entity';
import { Product } from '../product/product.entity';
import ProductOrder from '../product-order/product-order.entity';

export enum OrderStatus {
  Created,
  Processing,
  Done,
  Rejected,
}

@Entity({ name: 'orders' })
class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(() => ProductOrder)
  @JoinTable()
  products: ProductOrder[];

  @Column({ default: OrderStatus.Created })
  orderStatus: OrderStatus;

  @CreateDateColumn()
  createDate: string;

  @UpdateDateColumn()
  updateDate: string;

  @ManyToOne(() => Account, (account) => account.orders)
  account: Account;
}

export default Order;
