// src/product-category/dto/update-product-category.input.ts
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { CreateProductCategoryInput } from './create-product-category.input';

@InputType()
export class UpdateProductCategoryInput extends PartialType(CreateProductCategoryInput) {
  @Field(() => ID)
  id: string;
}
