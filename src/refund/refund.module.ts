// src/refund/refund.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Refund, RefundSchema } from './refund.model';
import { RefundResolver } from './refund.resolver';
import { RefundService } from './refund.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Refund.name, schema: RefundSchema }])],
  providers: [RefundResolver, RefundService],
})
export class RefundModule {}
