import { Document } from 'mongoose';
export type ProductSubCategoryDocument = ProductSubCategory & Document;
export declare class ProductSubCategory {
    name: string;
    productCategoryId: string;
}
export declare const ProductSubCategorySchema: import("mongoose").Schema<ProductSubCategory, import("mongoose").Model<ProductSubCategory, any, any, any, Document<unknown, any, ProductSubCategory> & ProductSubCategory & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ProductSubCategory, Document<unknown, {}, import("mongoose").FlatRecord<ProductSubCategory>> & import("mongoose").FlatRecord<ProductSubCategory> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
