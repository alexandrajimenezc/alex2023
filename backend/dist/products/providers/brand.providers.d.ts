import { DataSource } from 'typeorm';
import { Brand } from '../entities/brand.entity';
export declare const brandsProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Brand>;
    inject: string[];
}[];
