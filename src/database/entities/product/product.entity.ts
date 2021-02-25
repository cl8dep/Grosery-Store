import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum ProductUnit {
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

  @Column()
  price: number;

  @Column()
  quantity: number;

  @Column({ default: ProductUnit.Kg })
  unit: ProductUnit;

  @Column({ type: 'datetime' })
  lastFill: string;
}
