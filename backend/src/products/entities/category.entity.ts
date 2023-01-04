import { Date } from 'src/common/entities/date.entity';
import { PrimaryGeneratedColumn, Entity, Column, ManyToMany } from 'typeorm';
import { Product } from './product.entity';

@Entity({ name: 'category' })
export class Category extends Date {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;

  @ManyToMany(() => Product, (product) => product.categories)
  products: Product[];
}