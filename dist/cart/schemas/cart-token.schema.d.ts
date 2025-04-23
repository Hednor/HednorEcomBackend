import { Schema, Document } from 'mongoose';
export declare const CartTokenSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    token: string;
    createdAt: NativeDate;
}, Document<unknown, {}, import("mongoose").FlatRecord<{
    token: string;
    createdAt: NativeDate;
}>> & import("mongoose").FlatRecord<{
    token: string;
    createdAt: NativeDate;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class CartToken {
    token: string;
    createdAt: Date;
}
export interface CartTokenDocument extends CartToken, Document {
}
