import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { RegisterDto } from "./dtos/register.dto";

@Controller('api/users')
export class UsersController{

    constructor(private readonly userservice : UserService){}


    @Post('auth/register')
    public register (@Body() body :RegisterDto ){
     
        return this.userservice.register(body)

        
    }
}