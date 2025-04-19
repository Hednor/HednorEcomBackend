// src/product-category/product-category.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductCategory, ProductCategorySchema } from './schemas/product-category.schema';
import { ProductCategoryService } from './product-category.service';
import { ProductCategoryResolver } from './product-category.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProductCategory.name, schema: ProductCategorySchema },
    ]),
  ],
  providers: [ProductCategoryResolver, ProductCategoryService],
})
export class ProductCategoryModule {}
