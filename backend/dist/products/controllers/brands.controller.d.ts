import { BrandsService } from '../services/brands.service';
import { Brand } from '../entities/brand.entity';
export declare class BrandsController {
    private brandsService;
    constructor(brandsService: BrandsService);
    createdBrand(payload: any): Promise<any>;
    getAllBrands(): Promise<Brand[]>;
}
