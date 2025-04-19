// src/product-sub-category/dto/create-product-sub-category.input.ts
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductSubCategoryInput {
  @Field()
  name: string;

  @Field()
  productCategoryId: string;
}
