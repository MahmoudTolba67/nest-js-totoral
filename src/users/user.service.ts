import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { RegisterDto } from "./dtos/register.dto";
import * as bcrypt from "bcryptjs"
import { LoginDto } from "./dtos/login.dto";
import { retry } from "rxjs";

@Injectable()
export class UserService{

  constructor(
    @InjectRepository(User)private readonly userRepository : Repository<User>

  ){}

  /**
   * 
   * @param registerDto data from creating new user
   * @returns jwt (access token)
   */
  public async register (registerDto : RegisterDto){

    const {email , userName , password} = registerDto

    const check = await this.userRepository.findOne({where:{email}})
    if(check) throw new BadRequestException('this user already exist') 


        const salt = await bcrypt.genSalt(10)
        const hashpass = await  bcrypt.hash(password ,salt)

        let newUser = this.userRepository.create({
            email ,
            password:hashpass ,
            userName
        })
        newUser =await this.userRepository.save(newUser)
        return newUser
   }

   /**
    * @params logindto data from client
    * @return jwt (access token)
    */

   public async login(loginDto: LoginDto){
    const {email, password} = loginDto

    const user = await this.userRepository.findOne({where:{email}})
    if(!user) throw new BadRequestException('invalid email or password')
    
      const passwordcheck = await bcrypt.compare(password , user.password)

      if(!passwordcheck) throw new BadRequestException('invalid email or password')

        return user ;

   }
  

}