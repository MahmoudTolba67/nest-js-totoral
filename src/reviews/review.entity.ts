import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { current_stamp } from '../../utiti/constant';
import { Product } from '../product/product.entity';
import { User } from '../users/user.entity';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  comment: string;

  @Column({ type: 'int' })
  rating: number;

  @CreateDateColumn({ type: 'timestamp', default: () => current_stamp })
  createdAt: Date;

  @CreateDateColumn({ type: 'timestamp', default: () => current_stamp })
  updatedAt: Date;

  @ManyToOne(()=>Product , p=>p.reviews)
  product : Product 

  @ManyToOne(()=>User , u=>u.reviews)
  user:User
}
