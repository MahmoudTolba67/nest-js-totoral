import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { UsersModule } from './users/users.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [ProductModule,UsersModule,ReviewsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
 