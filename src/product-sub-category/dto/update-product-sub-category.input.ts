// src/product-sub-category/dto/update-product-sub-category.input.ts
import { CreateProductSubCategoryInput } from './create-product-sub-category.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateProductSubCategoryInput extends PartialType(CreateProductSubCategoryInput) {
  @Field(() => ID)
  id: string;
}
