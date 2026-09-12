import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductServices } from "./product.service";
import { UsersModule } from "../users/users.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./product.entity";

@Module({
    controllers:[ProductController],
    providers:[ProductServices],
    imports:[UsersModule ,TypeOrmModule.forFeature([Product])]
})
export class ProductModule{


}