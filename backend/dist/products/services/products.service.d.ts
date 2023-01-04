import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
import { FilterProductDto, UpddateProductDto } from '../dtos/products.dtos';
import { Category } from '../entities/category.entity';
import { Brand } from '../entities/brand.entity';
interface message {
    message: string;
}
interface productName {
    name: string;
}
export declare class ProductsService {
    private productRepository;
    private categoriesRepository;
    private brandsRepository;
    constructor(productRepository: Repository<Product>, categoriesRepository: Repository<Category>, brandsRepository: Repository<Brand>);
    finAll(params?: FilterProductDto): Promise<{}>;
    getOneByproductId(productId: number): Promise<Product>;
    create(data: any): Promise<message>;
    update(productId: number, changes: UpddateProductDto): Promise<message>;
    delete(productId: number): Promise<message>;
    getOneByProductName(productName: productName): Promise<Product>;
}
export {};
