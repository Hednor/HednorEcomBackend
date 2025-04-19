import { Document, Types } from 'mongoose';
export declare class CartProduct {
    product: Types.ObjectId;
    quantity: number;
}
export declare const CartProductSchema: import("mongoose").Schema<CartProduct, import("mongoose").Model<CartProduct, any, any, any, Document<unknown, any, CartProduct> & CartProduct & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CartProduct, Document<unknown, {}, import("mongoose").FlatRecord<CartProduct>> & import("mongoose").FlatRecord<CartProduct> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare class Cart {
    cartId: string;
    products: CartProduct[];
    userId: string;
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
export type CartDocument = Cart & Document;
