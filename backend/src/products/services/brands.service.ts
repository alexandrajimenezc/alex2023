import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brand } from '../entities/brand.entity';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand) private brandRepository: Repository<Brand>,
  ) {}

  async create(dta: any): Promise<any> {
    await this.brandRepository.save(dta);
    return { message: 'Marca creada' };
  }
  async getAll(){
    return await this.brandRepository.find()
  }
}
