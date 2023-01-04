import { Body, Controller, Get, Post } from "@nestjs/common";
import { CategoriesService } from "../services/categories.service";

@Controller('categories')
export class CategoriesController{
    constructor(private categoriesService:CategoriesService){

    }

    
    @Get()
    getCategories(){
        return this.categoriesService.getCategories()
    }

    @Post()
    createCategory(@Body() payload:any):Promise<any>{
        return this.categoriesService.create(payload)
    }
}