"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsModule = void 0;
const common_1 = require("@nestjs/common");
const products_service_1 = require("./services/products.service");
const brands_service_1 = require("./services/brands.service");
const categories_service_1 = require("./services/categories.service");
const brands_controller_1 = require("./controllers/brands.controller");
const products_controller_1 = require("./controllers/products.controller");
const categories_controller_1 = require("./controllers/categories.controller");
const product_entity_1 = require("./entities/product.entity");
const brand_entity_1 = require("./entities/brand.entity");
const category_entity_1 = require("./entities/category.entity");
const typeorm_1 = require("@nestjs/typeorm");
let ProductsModule = class ProductsModule {
};
ProductsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([product_entity_1.Product, brand_entity_1.Brand, category_entity_1.Category])],
        providers: [products_service_1.ProductsService, brands_service_1.BrandsService, categories_service_1.CategoriesService],
        controllers: [products_controller_1.ProductsController, brands_controller_1.BrandsController, categories_controller_1.CategoriesController],
        exports: [products_service_1.ProductsService, brands_service_1.BrandsService, categories_service_1.CategoriesService],
    })
], ProductsModule);
exports.ProductsModule = ProductsModule;
//# sourceMappingURL=products.module.js.map