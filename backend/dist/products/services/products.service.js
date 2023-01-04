"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pagination_1 = require("../../common/pagination/pagination");
const product_entity_1 = require("../entities/product.entity");
const category_entity_1 = require("../entities/category.entity");
const brand_entity_1 = require("../entities/brand.entity");
let ProductsService = class ProductsService {
    constructor(productRepository, categoriesRepository, brandsRepository) {
        this.productRepository = productRepository;
        this.categoriesRepository = categoriesRepository;
        this.brandsRepository = brandsRepository;
    }
    async finAll(params) {
        try {
            const limit = params.limit || 10;
            const page = params.page || 1;
            const offset = (page - 1) * limit;
            const keyword = params.keyword || '';
            const data = await this.productRepository.findAndCount({
                where: { name: (0, typeorm_2.Like)('%' + keyword + '%') },
                order: { name: 'DESC' },
                take: limit,
                skip: offset,
                relations: {
                    categories: true,
                }
            });
            return (0, pagination_1.paginateResponse)(data, page, limit);
        }
        catch (error) {
            console.error(error);
            throw new common_1.BadRequestException('BAD REQUEST, ' + error);
        }
    }
    async getOneByproductId(productId) {
        try {
            const id = productId;
            const product = await this.productRepository.findOne({
                where: { id },
                relations: {
                    categories: true,
                }
            });
            if (!product) {
                throw new common_1.NotFoundException(`Product #${id} not found`);
            }
            return product;
        }
        catch (error) {
            console.error(error);
            throw new common_1.BadRequestException('BAD REQUEST, ' + error);
        }
    }
    async create(data) {
        try {
            const idsCategories = await this.categoriesRepository.find({ where: { id: (0, typeorm_2.In)(data.categories) } });
            let newProduct = new product_entity_1.Product();
            newProduct = data;
            newProduct.categories = idsCategories;
            await this.productRepository.save(newProduct);
            return { message: 'Producto creado' };
        }
        catch (error) {
            console.error(error);
            throw new common_1.BadRequestException('BAD REQUEST, ' + error);
        }
    }
    async update(productId, changes) {
        try {
            const id = productId;
            const product = await this.productRepository.findOne({
                where: {
                    id,
                },
            });
            if (!product) {
                throw new common_1.NotFoundException(`Product #${id} not found`);
            }
            const productUpdated = await this.productRepository.update(id, changes);
            return { message: 'updated product ' + productUpdated };
        }
        catch (error) {
            console.error(error);
            throw new common_1.BadRequestException('BAD REQUEST, ' + error);
        }
    }
    async delete(productId) {
        try {
            await this.productRepository.delete(productId);
            return { message: ' deleted product' };
        }
        catch (error) {
            console.error(error);
            throw new common_1.BadRequestException('BAD REQUEST, ' + error);
        }
    }
    async getOneByProductName(productName) {
        try {
            let { name } = productName;
            const product = await this.productRepository.findOne({ where: { name } });
            if (!product) {
                throw new common_1.NotFoundException(`Product #${name} not found`);
            }
            return product;
        }
        catch (error) {
            console.error(error);
            throw new common_1.BadRequestException('BAD REQUEST, ' + error);
        }
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(1, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __param(2, (0, typeorm_1.InjectRepository)(brand_entity_1.Brand)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map