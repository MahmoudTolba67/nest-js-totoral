import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { UsersModule } from './users/users.module';
import { ReviewsModule } from './reviews/reviews.module';
import{TypeOrmModule} from'@nestjs/typeorm'
import { Product } from './product/product.entity';
@Module({
  imports: [ProductModule,
    UsersModule,
    ReviewsModule,
    TypeOrmModule.forRoot({
      type:'postgres' ,
      database:'nestjs-app-db',
      username:'postgres' ,
      password:'123456',
      port:5432 ,
      host:'localhost' ,
      synchronize:true,
      entities:[Product]


    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
 