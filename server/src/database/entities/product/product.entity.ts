import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

enum ProductUnit {
  Kg,
  Lb,
  Oz,
  Unit,
}

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  price: number;

  @Column()
  quantity: number;

  @Column({ default: ProductUnit.Kg })
  unit: ProductUnit;

  @Column({ type: 'datetime' })
  nextFill: string;

  @Column({ type: 'datetime' })
  lastFill: string;
}
