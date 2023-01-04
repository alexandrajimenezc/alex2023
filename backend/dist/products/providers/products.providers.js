"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsProviders = void 0;
const product_entity_1 = require("../entities/product.entity");
exports.productsProviders = [
    {
        provide: 'PRODUCTS_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(product_entity_1.Product),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=products.providers.js.map