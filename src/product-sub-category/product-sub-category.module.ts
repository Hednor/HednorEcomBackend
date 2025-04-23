// src/product-sub-category/product-sub-category.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSubCategory, ProductSubCategorySchema } from './schemas/product-sub-category.schema';
import { ProductSubCategoryService } from './product-sub-category.service';
import { ProductSubCategoryResolver } from './product-sub-category.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProductSubCategory.name, schema: ProductSubCategorySchema },
    ]),
  ],
  providers: [ProductSubCategoryResolver, ProductSubCategoryService],
})
export class ProductSubCategoryModule {}
