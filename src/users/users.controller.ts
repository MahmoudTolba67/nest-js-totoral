import { Controller, Get } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller()
export class UsersController{

    constructor(private readonly userservice : UserService){}
    @Get('/api/users')
    public getAllUsers (){
     
        return this.userservice.getAll()

        
    }
}