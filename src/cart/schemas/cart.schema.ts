import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type CartDocument = Cart & Document;

@Schema()
export class Cart {
  @Prop({ type: String, unique: true, required: false })
  cartId?: string;  // For anonymous users

  @Prop({ type: [{ productId: { type: Types.ObjectId, ref: 'Product' }, quantity: Number }], required: true })
  items: { productId: Types.ObjectId, quantity: number }[];  // Stores productId and quantity pairs

  @Prop({ type: String, unique: true, required: false })
  userId?: string;  // For logged-in users

  @Prop({ type: Types.ObjectId, ref: 'Order', required: false })
  order?: Types.ObjectId;  // Optional, associated order if applicable
}

export const CartSchema = SchemaFactory.createForClass(Cart);
