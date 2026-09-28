import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UserService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { JwtModule } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
@Module({
    controllers:[UsersController],
    providers:[UserService],
    exports:[UserService],
    imports: 
    [TypeOrmModule.forFeature([User]),
    
    JwtModule.registerAsync({
        inject:[ConfigService] ,
        useFactory:(config:ConfigService)=>{
            return{
                global:true ,
                secret:config.get<string>('jwt_secret'),
                signOptions:{ expiresIn:config.get<string>('jwt_expire')||'1d'}as any
            }

        }
  


    })

]
})
export class UsersModule{

}