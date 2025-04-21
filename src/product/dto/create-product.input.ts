// src/product/dto/create-product.input.ts
import { InputType, Field, Float, ID } from '@nestjs/graphql';
import { Product } from '../schemas/product.schema';

@InputType()
export class VariantInput {
  @Field({ nullable: true })
  size?: string;

  @Field({ nullable: true })
  color?: string;

}

@InputType()
export class CreateProductInput {
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
  @Field(() => [String]) images: string[];

  @Field(() => [VariantInput], { nullable: true })
  variants?: VariantInput[];

  @Field(() => [String]) tags: string[];
  @Field({ nullable: true }) dimensions?: string;
  @Field() featured: boolean;
  @Field({ nullable: true }) productType?: string;
  @Field() isDigital: boolean;
  @Field({ nullable: true }) shippingRegion?: string;
  @Field({ nullable: true }) returnPolicy?: string;
  @Field({ nullable: true }) bundle?: string;
  // @Field() category: string;
  @Field() sellerId: string;

  @Field({ nullable: true }) categoryId: string;
  @Field({ nullable: true }) subCategoryId: string;
}
