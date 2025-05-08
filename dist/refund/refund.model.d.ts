import { Document } from 'mongoose';
export type RefundDocument = Refund & Document;
export declare class Refund {
    _id: string;
    orderId: string;
    userId: string;
    reason: string;
    status: string;
    requestedAt: Date;
}
export declare const RefundSchema: import("mongoose").Schema<Refund, import("mongoose").Model<Refund, any, any, any, Document<unknown, any, Refund> & Refund & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Refund, Document<unknown, {}, import("mongoose").FlatRecord<Refund>> & import("mongoose").FlatRecord<Refund> & Required<{
    _id: string;
}> & {
    __v: number;
}>;
