import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { UsersModule } from './users/users.module';
import { ReviewsModule } from './reviews/reviews.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product/product.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Review } from './reviews/review.entity';
import { User } from './users/user.entity';
@Module({
  imports: [
    ProductModule,
    UsersModule,
    ReviewsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'postgres',
          host: 'localhost',
          port: config.get<number>('port'),
          database: config.get<string>('database'),
          username: config.get<string>('username'),
          password: config.get<string>('password'),
          synchronize: process.env.NODE_ENV !=='production',
          entities: [Product , Review,User],
        };
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
