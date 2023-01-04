import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../entities/category.entity';

@Injectable()
export class CategoriesService {
  // @InjectRepository(Brand) private brandRepository: Repository<Brand>,
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}
  async create(payload: any):Promise<any> {
     await this.categoryRepository.save(payload);
    return { message: 'Categoria creada'};
  }
  async getCategories():Promise<Category[]>{
    return await this.categoryRepository.find();
  }

  

}
