import { Date } from 'src/common/entities/date.entity';
import { Product } from './product.entity';
export declare class Category extends Date {
    id: number;
    name: string;
    products: Product[];
}
