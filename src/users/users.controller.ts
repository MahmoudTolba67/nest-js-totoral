import { Controller, Get } from "@nestjs/common";

@Controller()
export class UsersController{

    @Get('/api/users')
    public getAllUsers (){
        return[
            {id:1,email:'ahmed@gmail.com'},
            {id:2,email:'youssf@gmail.com'}

        ] 
    }
}