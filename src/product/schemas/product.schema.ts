// src/product/schemas/product.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true, unique: true })
  productId: string;

  @Prop() name: string;
  @Prop() description: string;
  @Prop() price: number;
  @Prop() salePrice?: number;
  @Prop() sku: string;
  @Prop() stock: number;

  @Prop() brand: string;
  @Prop() manufacturer?: string;
  @Prop() material?: string;
  @Prop() warranty?: string;
  @Prop() expirationDate?: Date;
  @Prop() barcode?: string;
  @Prop() rating?: number;
  @Prop() ratingCount?: number;
  @Prop() shippingWeight?: number;
  @Prop() availabilityStatus: string;

  @Prop({ default: Date.now }) createdAt: Date;
  @Prop({ default: Date.now }) updatedAt: Date;

  @Prop([String]) tags: string[];
  @Prop() dimensions?: string;
  @Prop() featured: boolean;
  @Prop() productType?: string;
  @Prop() isDigital: boolean;
  @Prop() shippingRegion?: string;
  @Prop() returnPolicy?: string;
  @Prop() bundle?: string;
  @Prop() category: string;

  @Prop() sellerId: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
