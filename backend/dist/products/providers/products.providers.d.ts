import { DataSource } from 'typeorm';
import { Product } from '../entities/product.entity';
export declare const productsProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Product>;
    inject: string[];
}[];
