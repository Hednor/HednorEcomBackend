// src/product-sub-category/schemas/product-sub-category.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductSubCategoryDocument = ProductSubCategory & Document;

@Schema()
export class ProductSubCategory {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  productCategoryId: string; // You can later use ObjectId and populate
}

export const ProductSubCategorySchema = SchemaFactory.createForClass(ProductSubCategory);
