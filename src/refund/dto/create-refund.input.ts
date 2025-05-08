// src/refund/dto/create-refund.input.ts
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateRefundInput {
  @Field()
  orderId: string;

  @Field()
  userId: string;

  @Field()
  reason: string;
}
