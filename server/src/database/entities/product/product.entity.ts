import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  price: number;

  @Column()
  quantity: number;

  @Column({ type: 'datetime' })
  nextFill: string;

  @Column({ type: 'datetime' })
  lastFill: string;
}
