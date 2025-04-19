import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

// 1. Pehle CartProductSchema bhi banana padega
@Schema({ _id: false })  // Embedded schema me _id: false best practice hai
export class CartProduct {
  @Prop({ type: Types.ObjectId, ref: 'Product', required: true })
  product: Types.ObjectId;

  @Prop({ required: true })
  quantity: number;
}

export const CartProductSchema = SchemaFactory.createForClass(CartProduct); // Yeh missing tha!!

@Schema()
export class Cart {
  @Prop({ unique: true })
  cartId: string;

  @Prop({ type: [CartProductSchema], default: [] })  // 👈 Yahan CartProductSchema use karna hai!
  products: CartProduct[];

  @Prop({ unique: true })
  userId: string;

  @Prop({ type: Types.ObjectId, ref: 'Order' })
  order?: Types.ObjectId;
}

export const CartSchema = SchemaFactory.createForClass(Cart);

export type CartDocument = Cart & Document;
