import { Schema, Document } from 'mongoose';

export const CartTokenSchema = new Schema({
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export class CartToken {
  token: string;
  createdAt: Date;
}

export interface CartTokenDocument extends CartToken, Document {}
