import { Document } from 'mongoose';
export type DiscountDocument = Discount & Document;
export declare class Discount {
    name: string;
    type: string;
    value?: number;
    couponCode?: string;
    minOrderValue?: number;
    applicableCategories?: string[];
    applicableProducts?: string[];
    maxDiscountAmount?: number;
    isActive: boolean;
    startDate?: Date;
    endDate?: Date;
}
export declare const DiscountSchema: import("mongoose").Schema<Discount, import("mongoose").Model<Discount, any, any, any, Document<unknown, any, Discount> & Discount & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Discount, Document<unknown, {}, import("mongoose").FlatRecord<Discount>> & import("mongoose").FlatRecord<Discount> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
