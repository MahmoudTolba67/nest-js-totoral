import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dtos/create-prodcut.dto';
import { UpdateProductDto } from './dtos/update-product.dto';

type productType = { id: number; title: string; price: number };

@Injectable()
export class ProductServices {
  private products: productType[] = [
    { id: 1, title: 'book', price: 10 },
    { id: 2, title: 'pen', price: 5 },
    { id: 3, title: 'laptop', price: 400 },
  ];

  /**
            create new product
         */
  public addProduct({ title, price }: CreateProductDto) {
    const newProduct: productType = {
      id: this.products.length + 1,
      title,
      price,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  /**
           get all product
         */

  public getAllProduct() {
    return this.products;
  }

  /**
            get product by id 
         */
  public getByID(id: number) {
    const product = this.products.find((p) => p.id === id);
    if (!product) throw new NotFoundException('product not found');
    return product;
  }
  /**
            update product()
         */

  public updateProduct(id: string, updateProductDto: UpdateProductDto) {
    const product = this.products.find((p) => p.id === parseInt(id));
    if (!product) throw new NotFoundException('product not found');
    console.log(updateProductDto);

    return { message: 'the product is updated by id ' + id };
  }
  /**
           delete product
         */

  public deleteProduct(id: string) {
    const product = this.products.find((p) => p.id === parseInt(id));
    if (!product) throw new NotFoundException('product not found');
    return { message: 'the product is deleted' };
  }
}
