import { Date } from 'src/common/entities/date.entity';
import { Product } from './product.entity';
export declare class Brand extends Date {
    id: number;
    name: string;
    image: string;
    products: Product[];
}
