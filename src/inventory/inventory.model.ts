// src/inventory/inventory.model.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Inventory extends Document {
  @Prop({ required: true })
  productId: string;

  @Prop({ required: true })
  quantity: number;
}

export const InventorySchema = SchemaFactory.createForClass(Inventory);
