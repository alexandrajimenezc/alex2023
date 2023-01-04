"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.brandsProviders = void 0;
const brand_entity_1 = require("../entities/brand.entity");
exports.brandsProviders = [
    {
        provide: 'BRANDS_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(brand_entity_1.Brand),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=brand.providers.js.map