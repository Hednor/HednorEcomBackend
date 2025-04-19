// src/product/entities/product.entity.ts
import { ObjectType, Field, ID, Float } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => ID)
  _id: string;

  @Field() productId: string;
  @Field() name: string;
  @Field() description: string;
  @Field(() => Float) price: number;
  @Field(() => Float, { nullable: true }) salePrice?: number;
  @Field() sku: string;
  @Field() stock: number;
  @Field() brand: string;
  @Field({ nullable: true }) manufacturer?: string;
  @Field({ nullable: true }) material?: string;
  @Field({ nullable: true }) warranty?: string;
  @Field({ nullable: true }) expirationDate?: Date;
  @Field({ nullable: true }) barcode?: string;
  @Field(() => Float, { nullable: true }) rating?: number;
  @Field({ nullable: true }) ratingCount?: number;
  @Field(() => Float, { nullable: true }) shippingWeight?: number;
  @Field() availabilityStatus: string;
  @Field(() => [String]) tags: string[];
  @Field({ nullable: true }) dimensions?: string;
  @Field() featured: boolean;
  @Field({ nullable: true }) productType?: string;
  @Field() isDigital: boolean;
  @Field({ nullable: true }) shippingRegion?: string;
  @Field({ nullable: true }) returnPolicy?: string;
  @Field({ nullable: true }) bundle?: string;
  @Field() category: string;
  @Field() sellerId: string;
}
