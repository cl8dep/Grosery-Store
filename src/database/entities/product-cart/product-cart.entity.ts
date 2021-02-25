import { Entity, PrimaryGeneratedColumn, OneToOne, JoinTable, ManyToOne, Column, OneToMany } from 'typeorm';
import { Product } from '../product/product.entity';
import Cart from '../cart/cart.entity';

@Entity()
export default class ProductCart {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(x => Product, {eager: true})
  @JoinTable()
  product: Product;

  @Column()
  quantity: number;

  @ManyToOne(() => Cart, cart => cart.products)
  cart: Cart
}
