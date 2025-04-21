// src/order/dto/update-order-delivery.input.ts

import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateOrderDeliveryInput {
  @Field()
  orderId: string;

  @Field({ nullable: true })
  status?: string;

  @Field({ nullable: true })
  tracking?: string;
}
