// src/product-sub-category/entities/product-sub-category.entity.ts
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class ProductSubCategory {
  @Field(() => ID)
  _id: string;

  @Field()
  name: string;

  @Field()
  productCategoryId: string;
}
