import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService{

  
        public getAll (){
            return[
                {id:1,email:'ahmed@gmail.com'},
                {id:2,email:'youssf@gmail.com'}
    
            ] 
        }
}