import { Module } from '@nestjs/common';
import { ProductsService } from './services/products.service';
import { BrandsService } from './services/brands.service';
import { CategoriesService } from './services/categories.service';
import {BrandsController} from './controllers/brands.controller'
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { Product } from './entities/product.entity';
import { Brand } from './entities/brand.entity';
import { Category } from './entities/category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Brand, Category])],
  providers: [ProductsService, BrandsService, CategoriesService],
  controllers: [ProductsController,BrandsController, CategoriesController],
  exports: [ProductsService, BrandsService, CategoriesService],
})
export class ProductsModule {}
