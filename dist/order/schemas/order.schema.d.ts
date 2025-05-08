import { Document } from 'mongoose';
export type OrderDocument = Order & Document;
export declare class Order {
    orderId: string;
    items: string[];
    totalAmount: number;
    coupanIds: string[];
    status: string;
    cartId: string;
    paymentId: string;
    userId: string;
    address: string;
    tracking: string;
}
export declare const OrderSchema: import("mongoose").Schema<Order, import("mongoose").Model<Order, any, any, any, Document<unknown, any, Order> & Order & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Order, Document<unknown, {}, import("mongoose").FlatRecord<Order>> & import("mongoose").FlatRecord<Order> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
