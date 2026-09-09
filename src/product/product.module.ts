import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductServices } from "./product.service";
import { UsersModule } from "../users/users.module";
import { UserService } from "../users/user.service";

@Module({
    controllers:[ProductController],
    providers:[ProductServices],
    imports:[UsersModule]
})
export class ProductModule{


}