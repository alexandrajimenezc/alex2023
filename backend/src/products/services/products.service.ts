import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like, In } from 'typeorm';
import { paginateResponse } from '../../common/pagination/pagination';
import { Product } from '../entities/product.entity';

import {
  CreateProductDto,
  FilterProductDto,
  UpddateProductDto,
} from '../dtos/products.dtos';
import { Category } from '../entities/category.entity';
import { Brand } from '../entities/brand.entity';
interface message {
  message: string;
}

interface productName {
  name: string;
}
@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
    @InjectRepository(Brand) private brandsRepository: Repository<Brand>,
  ) {}

  async finAll(params?: FilterProductDto): Promise<{}> {
    try {
      const limit = params.limit || 10;
      const page = params.page || 1;
      const offset = (page - 1) * limit;
      const keyword = params.keyword || '';

      const data = await this.productRepository.findAndCount({
        where: { name: Like('%' + keyword + '%') },
        order: { name: 'DESC' },
        take: limit,
        skip: offset,
        relations: {
          categories: true,
      }
      });
      
      return paginateResponse(data, page, limit);
    } catch (error) {
      console.error(error);
      throw new BadRequestException('BAD REQUEST, ' + error);
    }
  }

  async getOneByproductId(productId: number): Promise<Product> {
    try {
      const id = productId;
      const product = await this.productRepository.findOne({
        where: { id },
        relations: {
          categories: true,
      }
      });
      if (!product) {
        throw new NotFoundException(`Product #${id} not found`);
      }
      return product;
    } catch (error) {
      console.error(error);
      throw new BadRequestException('BAD REQUEST, ' + error);
    }
  }

  async create(data: any): Promise<message> {
    try {
    
      const idsCategories= await this.categoriesRepository.find({ where: {id: In(data.categories)} })
      let newProduct= new Product()
      newProduct=data
      newProduct.categories= idsCategories
      await this.productRepository.save(newProduct);

       return { message: 'Producto creado' };

    } catch (error) {
      console.error(error);
      throw new BadRequestException('BAD REQUEST, ' + error);
    }
  }

  async update(
    productId: number,
    changes: UpddateProductDto,
  ): Promise<message> {
    try {
      const id = productId;
      const product = await this.productRepository.findOne({
        where: {
          id,
        },
      });
      if (!product) {
        throw new NotFoundException(`Product #${id} not found`);
      }
      const productUpdated = await this.productRepository.update(id, changes);
      return { message: 'updated product ' + productUpdated };
    } catch (error) {
      console.error(error);
      throw new BadRequestException('BAD REQUEST, ' + error);
    }
  }

  async delete(productId: number): Promise<message> {
    try {
      await this.productRepository.delete(productId);
      return { message: ' deleted product' };
    } catch (error) {
      console.error(error);
      throw new BadRequestException('BAD REQUEST, ' + error);
    }
  }

  async getOneByProductName(productName: productName): Promise<Product> {
    try {
      let { name } = productName;
      const product = await this.productRepository.findOne({ where: { name } });

      if (!product) {
        throw new NotFoundException(`Product #${name} not found`);
      }

      return product;
    } catch (error) {
      console.error(error);
      throw new BadRequestException('BAD REQUEST, ' + error);
    }
  }
}
