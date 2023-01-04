import { IsString, IsNumber, IsUrl, IsPositive, IsArray, IsNotEmpty, IsOptional, ValidateIf } from 'class-validator'
import { ApiProperty, PartialType } from '@nestjs/swagger'
export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: `product's name` })
    name: string;

    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    @ApiProperty({ description: `product's price ` })
    price: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: `product's description` })
    description: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: `product's stock ` })
    stock: number;

    @IsUrl()
    @IsNotEmpty()
    @ApiProperty({ description: `product's image url` })
    image: string;

    @IsPositive()
    @IsNotEmpty()
    @ApiProperty({ description: `product's ` })
    brandId: number;


    @IsArray()
    @IsNotEmpty()
    @ApiProperty({ description: `product's ` })
    categoryId: number[];
}

export class UpddateProductDto extends PartialType(CreateProductDto) { }


export class FilterProductDto {
    @IsOptional()
    @IsPositive()
    page: number;

    @IsOptional()
    @IsString()
    keyword: string;


    @IsOptional()
    @IsPositive()
    limit: number;

    @IsOptional()
    @IsPositive()
    offset: number;


    @IsOptional()
    @IsPositive()
    minPrice: number;

    @ValidateIf((item) => item.minPrice)
    @IsPositive()
    maxPrice: number;
}