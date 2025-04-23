// src/product-category/dto/create-product-category.input.ts
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductCategoryInput {
  @Field()
  name: string;

  @Field()
  image: string;

  @Field({ nullable: true })
  description?: string;
}
