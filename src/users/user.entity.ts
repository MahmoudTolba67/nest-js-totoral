import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { current_stamp } from "../../utiti/constant";
import { Review } from "../reviews/review.entity";
import { Product } from "../product/product.entity";

enum UserType {
    Admin='admin',
    NormalUser='normalUser'
}
@Entity({name:'users'})
export class User{
    @PrimaryGeneratedColumn()
    id: number ;

    @Column({type : 'varchar' , length:'150' , nullable:true})
    userName : string; 

    @Column()
    password: string ;

     @Column({default:false})
    isAccountVerified: boolean ;

    @Column({type:'varchar' ,length:'250' ,unique:true })
    email:string  ;

    @Column({type:'enum' ,enum:UserType , default:UserType.NormalUser })
    userType:UserType  ;

    @CreateDateColumn({type:'timestamp' , default: ()=> current_stamp})
    createdAt: Date ;

    @CreateDateColumn({type:'timestamp' , default: ()=> current_stamp})
    updatedAt:Date ;

   
    
    @OneToMany(()=>Product , p=>p.user)
    products:Product[]

    @OneToMany(()=>Review ,r=>r.user )
    reviews:Review[]

}