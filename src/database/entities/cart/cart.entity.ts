import {
  Column,
  CreateDateColumn,
  Entity, JoinTable,
  ManyToMany, OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import ProductOrder from '../product-order/product-order.entity';
import ProductCart from '../product-cart/product-cart.entity';

@Entity({ name: 'carts' })
class Cart {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(
    () => ProductCart,
      productCart => productCart.cart,
    {cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE', eager: true})
  @JoinTable()
  products: ProductCart[];

  @CreateDateColumn()
  createDate: string;

  @UpdateDateColumn()
  updateDate: string;
}

export default Cart;
