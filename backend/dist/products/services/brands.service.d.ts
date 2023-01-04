import { Repository } from 'typeorm';
import { Brand } from '../entities/brand.entity';
export declare class BrandsService {
    private brandRepository;
    constructor(brandRepository: Repository<Brand>);
    create(dta: any): Promise<any>;
    getAll(): Promise<Brand[]>;
}
