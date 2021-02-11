import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Order from '../order/order.entity';
import Cart from '../cart/cart.entity';

export enum AccountRole {
  USER,
  ADMIN,
}

@Entity({ name: 'accounts' })
class Account implements IJwtAccountData {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 500 })
  firstName: string;

  @Column({ length: 500 })
  lastName: string;

  @Column()
  password: string;

  @Column({ unique: true })
  email: string;

  @Column()
  cellphone: string;

  @Column()
  address: string;

  @Column({ default: AccountRole.USER })
  role: AccountRole;

  @Column({ default: false })
  isActive: boolean;

  @CreateDateColumn()
  createDate: string;

  @UpdateDateColumn()
  updateDate: string;

  @OneToMany<Order>(() => Order, (order) => order.account)
  @JoinColumn()
  orders: Order[];

  @OneToOne(() => Cart)
  @JoinColumn()
  profile: Cart;
}

export interface IJwtAccountData {
  id: string;
  email: string;
  role: AccountRole;
}

export default Account;
