import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 500 })
  price: number;

  @Column()
  quantity: number;

  @Column()
  nextFill: string;

  @Column()
  lastFill: string;
}
