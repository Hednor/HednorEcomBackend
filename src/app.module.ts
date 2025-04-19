
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { ProductModule } from './product/product.module';
import { ProductCategoryModule } from './product-category/product-category.module';
import { ProductSubCategoryModule } from './product-sub-category/product-sub-category.module';
import { join } from 'path';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/hadnor'),
    GraphQLModule.forRoot({
      driver: ApolloDriver, // ✅ REQUIRED in v10+
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    ProductModule,
    ProductCategoryModule,
    ProductSubCategoryModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
