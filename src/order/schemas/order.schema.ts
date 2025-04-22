// // src/order/schemas/order.schema.ts
// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

// export type OrderDocument = Order & Document;

// @Schema({ timestamps: true })
// export class Order {
//   @Prop({ required: true })
//   userId: string;

//   @Prop({ required: true })
//   items: string[]; // Simplified

//   @Prop({ required: true })
//   totalAmount: number;

//   @Prop({ default: 'Pending' })
//   status: string;
// }

// export const OrderSchema = SchemaFactory.createForClass(Order);


// order.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema({ timestamps: true })
export class Order {
  @Prop({ required: true, unique: true })
  orderId: string;

  @Prop({ required: true })
  items: string[]; // Simplified

  @Prop({ required: true })
  totalAmount: number;

  @Prop({ type: [String], default: [] })
  coupanIds: string[];

  // @Prop({ enum: ['Pending', 'Success', 'Failed', 'Rejected', 'Processing'], default: 'Pending' })
  // status: string;

  

@Prop({
  type: String,
  enum: ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled' , 'Processing' , 'Rejected', 'Failed', 'Success'],
  default: 'pending',
})
status: string;




  @Prop({ required: true })
  cartId: string;

  @Prop({ required: true })
  paymentId: string;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  address: string;

  @Prop({ default: '' }) // Initially empty
  tracking: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
