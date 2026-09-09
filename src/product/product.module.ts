import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductServices } from "./product.service";

@Module({
    controllers:[ProductController],
    providers:[ProductServices]
})
export class ProductModule{


}