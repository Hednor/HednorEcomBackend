import { Document } from 'mongoose';
export type ProductCategoryDocument = ProductCategory & Document;
export declare class ProductCategory {
    name: string;
    image: string;
    description?: string;
}
export declare const ProductCategorySchema: import("mongoose").Schema<ProductCategory, import("mongoose").Model<ProductCategory, any, any, any, Document<unknown, any, ProductCategory> & ProductCategory & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ProductCategory, Document<unknown, {}, import("mongoose").FlatRecord<ProductCategory>> & import("mongoose").FlatRecord<ProductCategory> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
