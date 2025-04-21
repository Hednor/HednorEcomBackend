// src/product/product.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schemas/product.schema';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
// import { ProductCategoryModule } from 'src/product-category/product-category.module';
// import { ProductSubCategoryModule } from 'src/product-sub-category/product-sub-category.module';
import { ProductCategory, ProductCategorySchema } from 'src/product-category/schemas/product-category.schema';
import { ProductSubCategory, ProductSubCategorySchema } from 'src/product-sub-category/schemas/product-sub-category.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: ProductCategory.name, schema: ProductCategorySchema },
      { name: ProductSubCategory.name, schema: ProductSubCategorySchema },
    ]),
  ],
  providers: [ProductResolver, ProductService],
})
export class ProductModule {}
