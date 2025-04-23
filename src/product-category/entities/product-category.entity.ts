// src/product-category/entities/product-category.entity.ts
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class ProductCategory {
  @Field(() => ID)
  _id: string;

  @Field()
  name: string;

  @Field()
  image: string;

  @Field({ nullable: true })
  description?: string;
}
