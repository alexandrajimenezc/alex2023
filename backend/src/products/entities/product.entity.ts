import { Date } from 'src/common/entities/date.entity';
import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  Index,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { Brand } from './brand.entity';
import { Category } from './category.entity';



@Entity({ name: 'products' })
@Index(['price', 'stock'])
export class Product extends Date {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'int' })
  @Index()
  price: number;

  @Column({ type: 'int' })
  stock: number;

  @Column({ type: 'varchar' })
  image: string;

  @ManyToOne(() => Brand, (brand) => brand.products)
  brand: Brand;

  @ManyToMany(() => Category, (category) => category.products, {
    cascade:  ["insert", "update"],
})
  @JoinTable()
  categories: Category[];
}
