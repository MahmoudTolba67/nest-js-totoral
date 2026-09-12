import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dtos/create-prodcut.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { UserService } from '../users/user.service';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { InjectRepository } from '@nestjs/typeorm';

type productType = { id: number; title: string; price: number };

@Injectable()
export class ProductServices {
   constructor(@InjectRepository(Product)
   private readonly prodcutRepository : Repository<Product>
   ){}
  private products: productType[] = [
    { id: 1, title: 'book', price: 10 },
    { id: 2, title: 'pen', price: 5 },
    { id: 3, title: 'laptop', price: 400 },
  ];

  /**
            create new product
         */
  public async addProduct(Dto: CreateProductDto) {
    const product = this.prodcutRepository.create(Dto) ;
    return await this.prodcutRepository.save(product) ;


  }
  /**
           get all product
         */

  public getAll() {

   return this.prodcutRepository.find();
  }

  /**
            get product by id 
         */
  public async getByID(id: number) {
   const product = await this.prodcutRepository.findOne({where:{id}})
   if(!product) throw new NotFoundException('product not found')
    return product
  }
  /**
            update product()
         */

  public async updateProduct(id: number, dto: UpdateProductDto) {
    const product = await this.getByID(id);
    product.description = dto.description ?? product.description
    product.title = dto.title ?? product.title 
    product.price = dto.price ?? product.price
    return this.prodcutRepository.save(product)

  }
  /**
           delete product
         */

  public async deleteProduct(id: number) {
    const product =await this.getByID(id)
    await this.prodcutRepository.remove(product);

    return { message: 'the product is deleted' };
  }
}
