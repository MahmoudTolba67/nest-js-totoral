import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateProductDto } from './dtos/create-prodcut.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { ProductServices } from './product.service';

@Controller('/api/products/')
export class ProductController {
    constructor(private readonly  productService: ProductServices){}
    @Post()
  public addProduct(@Body() body: CreateProductDto) {
    return this.productService.addProduct(body);
  }

  @Get()
  public getAllProduct() {
    return this.productService.getAllProduct();
  }

  @Get(':id')
  public getProductByID(@Param('id', ParseIntPipe) id: number) {
    return this.productService.getByID(id);
  }

  @Put(':id')
  public updateProduct(
    @Param('id') id: string,
    @Body() body: UpdateProductDto,
  ) {
    return this.productService.updateProduct(id, body);
  }

  @Delete(':id')
  public deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }
}
