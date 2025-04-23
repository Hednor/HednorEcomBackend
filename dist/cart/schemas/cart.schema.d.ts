import { Document, Types } from 'mongoose';
export type CartDocument = Cart & Document;
export declare class Cart {
    cartId?: string;
    items: {
        productId: Types.ObjectId;
        quantity: number;
    }[];
    userId?: string;
    order?: Types.ObjectId;
}
export declare const CartSchema: import("mongoose").Schema<Cart, import("mongoose").Model<Cart, any, any, any, Document<unknown, any, Cart> & Cart & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Cart, Document<unknown, {}, import("mongoose").FlatRecord<Cart>> & import("mongoose").FlatRecord<Cart> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
