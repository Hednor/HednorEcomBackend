// // src/order/dto/order.type.ts
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { OrderItemType } from './order-item.type';

// @ObjectType()
// export class OrderType {
//   @Field(() => ID)
//   _id: string;

//   @Field()
//   userId: string;

//   @Field(() => [String])
//   items: string[];

//   @Field()
//   totalAmount: number;

//   @Field()
//   status: string;

//   @Field()
//   createdAt: Date;

//   @Field()
//   updatedAt: Date;
// }




@ObjectType()
export class OrderType {
  @Field(() => ID)
  _id: string;

  @Field()
  orderId: string;

  @Field()
  totalAmount: number;

  @Field(() => [String])
  coupanIds: string[];

  @Field()
  status: string;

  @Field()
  cartId: string;

  @Field()
  paymentId: string;

  @Field()
  userId: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  address: string;

  @Field()
  tracking: string;

  @Field()
  orderStatus: string;

  @Field(() => [OrderItemType])
  items: OrderItemType[];
}

