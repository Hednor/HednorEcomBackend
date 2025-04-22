import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class OrderItemType {
  @Field()
  productId: string;

  @Field()
  quantity: number;

  @Field()
  price: number; // Optional: agar price bhi save ho raha ho item-wise

  @Field()
  name: string; // Optional: agar product name chahiye to
}
