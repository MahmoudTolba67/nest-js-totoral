import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

 const current_stamp = 'CURRENT_TIMESTAMP(6)'

@Entity({name:'products'})
export class Product{
    @PrimaryGeneratedColumn()
    id: number ;

    @Column()
    title : string; 

    @Column({type:'varchar' ,length:'150'})
    description: string ;

    @Column({type:'float' })
    price:number ;

    @CreateDateColumn({type:'timestamp' , default: ()=> current_stamp})
    createdAt: Date ;

    @CreateDateColumn({type:'timestamp' , default: ()=> current_stamp})
    updatedAt:Date ;

}