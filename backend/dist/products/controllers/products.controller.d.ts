import { ProductsService } from '../services/products.service';
import { CreateProductDto, FilterProductDto, UpddateProductDto } from '../dtos/products.dtos';
import { Product } from '../entities/product.entity';
interface message {
    message: string;
}
interface productId {
    id: number;
}
interface productName {
    name: string;
}
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getProducts(params: FilterProductDto): Promise<{}>;
    getOneProductById(productId: productId): Promise<Product>;
    create(payload: CreateProductDto): Promise<message>;
    upddate(id: number, payload: UpddateProductDto): Promise<message>;
    delete(id: number): Promise<message>;
    getOneProductByName(name: productName): Promise<Product>;
}
export {};
