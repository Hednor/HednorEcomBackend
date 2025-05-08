import { Field, InputType } from "@nestjs/graphql";
import { DeductStockInput } from "src/inventory/dto/deduct-stock.input";

@InputType()
export class CreateOrderInput {
  @Field()
  orderId: string;
  @Field()
  status: string;

  @Field()
  totalAmount: number;

  @Field(() => [String], { nullable: true })
  coupanId?: string[];

  @Field()
  cartId: string;

  @Field()
  paymentId: string;

  @Field()
  userId: string;

  @Field()
  address: string;

  @Field(() => [DeductStockInput])
  cartItems: DeductStockInput[];

  
}
