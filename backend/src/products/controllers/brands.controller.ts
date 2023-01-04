import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BrandsService } from '../services/brands.service';
import { Brand } from '../entities/brand.entity';

@ApiTags('Brands')
@Controller('brands')
export class BrandsController {
  constructor(private brandsService: BrandsService) {}

  @Post()
  createdBrand(@Body() payload:any){
   return this.brandsService.create(payload)
  }


  @Get()
  getAllBrands(){
   return this.brandsService.getAll()
  }

}
