import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DiscountDocument = Discount & Document;

@Schema({ timestamps: true })
export class Discount {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  type: string;

  @Prop()
  value?: number;

  @Prop()
  couponCode?: string;

  @Prop()
  minOrderValue?: number;

  @Prop({ type: [String] })
  applicableCategories?: string[];

  @Prop({ type: [String] })
  applicableProducts?: string[];

  @Prop()
  maxDiscountAmount?: number;

  @Prop({ default: true })
  isActive: boolean;

  @Prop()
  startDate?: Date;

  @Prop()
  endDate?: Date;
}

export const DiscountSchema = SchemaFactory.createForClass(Discount);
