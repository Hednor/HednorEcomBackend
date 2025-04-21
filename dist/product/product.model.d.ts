import { Document } from 'mongoose';
export declare class product extends Document {
    name: string;
    price: number;
    stock: number;
}
export declare const ProductSchema: import("mongoose").Schema<product, import("mongoose").Model<product, any, any, any, Document<unknown, any, product> & product & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, product, Document<unknown, {}, import("mongoose").FlatRecord<product>> & import("mongoose").FlatRecord<product> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
