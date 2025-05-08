// src/refund/dto/update-refund-status.input.ts
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateRefundStatusInput {
  @Field()
  orderId: string;

  @Field()
  status: string; // "Approved" | "Rejected"
}
