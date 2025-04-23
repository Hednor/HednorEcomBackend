// src/product-category/schemas/product-category.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductCategoryDocument = ProductCategory & Document;

@Schema()
export class ProductCategory {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  image: string;

  @Prop()
  description?: string;
}

export const ProductCategorySchema = SchemaFactory.createForClass(ProductCategory);
