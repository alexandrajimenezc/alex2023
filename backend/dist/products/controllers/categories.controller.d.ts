import { CategoriesService } from "../services/categories.service";
export declare class CategoriesController {
    private categoriesService;
    constructor(categoriesService: CategoriesService);
    getCategories(): Promise<import("../entities/category.entity").Category[]>;
    createCategory(payload: any): Promise<any>;
}
