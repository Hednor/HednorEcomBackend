// src/refund/refund.model.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';

export type RefundDocument = Refund & Document;

@Schema({ timestamps: true })
@ObjectType() // 👈 GraphQL decorator add karo yahan
export class Refund {
  @Field(() => ID) // 👈 GraphQL ke liye field define karo
  _id: string;

  @Prop({ required: true })
  @Field()
  orderId: string;

  @Prop({ required: true })
  @Field()
  userId: string;

  @Prop({ required: true })
  @Field()
  reason: string;

  @Prop({ enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' })
  @Field()
  status: string;

  @Prop({ default: Date.now })
  @Field()
  requestedAt: Date;
}

export const RefundSchema = SchemaFactory.createForClass(Refund);
