import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum AccountRole {
  USER,
  ADMIN,
}

@Entity({ name: 'accounts' })
class Account {
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
}

export default Account;
