import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { RegisterDto } from "./dtos/register.dto";
import * as bcrypt from "bcryptjs"
import { LoginDto } from "./dtos/login.dto";
import { retry } from "rxjs";
import { JwtService } from "@nestjs/jwt";
import { AccessTokenType, JwtPayload } from "../../utiti/types";
import { promises } from "dns";

@Injectable()
export class UserService{

  constructor(
    @InjectRepository(User)private readonly userRepository : Repository<User> ,
     private readonly jwtService : JwtService

  ){}

  /**
   * 
   * @param registerDto data from creating new user
   * @returns jwt (access token)
   */
  public async register (registerDto : RegisterDto):Promise<AccessTokenType>{

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
        const accessToken =await this.genrateToken( {id : newUser.id , userType : newUser.userType})
        return {accessToken}

        

   }

   /**
    * @params logindto data from client
    * @return jwt (access token)
    */

   public async login(loginDto: LoginDto) :Promise<AccessTokenType> {
    const {email, password} = loginDto

    const user = await this.userRepository.findOne({where:{email}})
    if(!user) throw new BadRequestException('invalid email or password')
    
      const passwordcheck = await bcrypt.compare(password , user.password)

      if(!passwordcheck) throw new BadRequestException('invalid email or password')

        const accessToken = await this.genrateToken({id: user.id ,userType:user.userType })

        return {accessToken} ;

   }

   private genrateToken (payload: JwtPayload) :Promise<string>{

    return this.jwtService.signAsync(payload) ;
   }
  

}