import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger'
import { CreateProductDto, FilterProductDto, UpddateProductDto } from '../dtos/products.dtos';
import { Product } from '../entities/product.entity';

interface message {
    message: string
}
interface productId {
    id: number
}
interface productName{
    name:string
  }
@ApiTags('Productos')
@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) { }

    @Get()
    @HttpCode(HttpStatus.ACCEPTED)
    @ApiOperation({
        summary: 'Lista de productos', description: 'Recibes la lista de productos',

    })
    getProducts(@Query() params:FilterProductDto): Promise<{}> {
        return this.productsService.finAll(params)
    }


    @Get(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    @ApiOperation({
        summary: 'Obtiene un producto por id', description: 'Recibes un productos',
    })
    getOneProductById(@Param() productId: productId) { 
        return this.productsService.getOneByproductId(productId.id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({
        summary: 'Creas un producto ', description: 'Devuelve un mensaje de creado, si se crea con éxito el producto',
    })
    create(@Body() payload: CreateProductDto): Promise<message> {
        return this.productsService.create(payload)
    }

    @Put(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    upddate(@Param() id: number, @Body() payload: UpddateProductDto):Promise<message> {

        return this.productsService.update(id, payload)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    delete(@Param() id: number):Promise<message> {
        return this.productsService.delete(id)
    }

    @Get('/search-name/:name')
    @HttpCode(HttpStatus.ACCEPTED)
    getOneProductByName(@Param() name:productName):Promise<Product>{
        return this.productsService.getOneByProductName(name)
    
    }
    
}
