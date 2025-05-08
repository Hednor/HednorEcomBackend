// src/inventory/dto/deduct-stock.input.ts

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DeductStockInput {
  @Field()
  productId: string;

  @Field()
  quantity: number;
}
