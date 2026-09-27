import { Body, Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { RegisterDto } from "./dtos/register.dto";
import { LoginDto } from "./dtos/login.dto";

@Controller('api/users')
export class UsersController{

    constructor(private readonly userservice : UserService){}


    @Post('auth/register')
    public register (@Body() body :RegisterDto ){
     
        return this.userservice.register(body)
    }


    @Post('auth/login')
    @HttpCode(HttpStatus.OK)
    public login (@Body() body :LoginDto ){
     
        return this.userservice.login(body)
    }

}