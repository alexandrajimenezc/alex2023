import { Date } from 'src/common/entities/date.entity';
import { Brand } from './brand.entity';
import { Category } from './category.entity';
export declare class Product extends Date {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    brand: Brand;
    categories: Category[];
}
