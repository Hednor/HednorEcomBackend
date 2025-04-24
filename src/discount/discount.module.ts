// src/discount/discount.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Discount, DiscountSchema } from './discount.schema';
import { DiscountService } from './discount.service';
import { DiscountController } from './discount.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Discount.name, schema: DiscountSchema },
    ]),
  ],
  controllers: [DiscountController],
  providers: [DiscountService],
})
export class DiscountModule {}
