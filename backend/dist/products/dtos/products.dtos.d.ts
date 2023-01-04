export declare class CreateProductDto {
    name: string;
    price: number;
    description: string;
    stock: number;
    image: string;
    brandId: number;
    categoryId: number[];
}
declare const UpddateProductDto_base: import("@nestjs/common").Type<Partial<CreateProductDto>>;
export declare class UpddateProductDto extends UpddateProductDto_base {
}
export declare class FilterProductDto {
    page: number;
    keyword: string;
    limit: number;
    offset: number;
    minPrice: number;
    maxPrice: number;
}
export {};
