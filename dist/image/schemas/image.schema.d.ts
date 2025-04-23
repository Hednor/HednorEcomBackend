import { Document } from 'mongoose';
export type ImageDocument = Image & Document;
export declare class Image {
    _id: string;
    url: string;
    color: string;
    images: string[];
    price: number;
    productId: string;
}
export declare const ImageSchema: import("mongoose").Schema<Image, import("mongoose").Model<Image, any, any, any, Document<unknown, any, Image> & Image & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Image, Document<unknown, {}, import("mongoose").FlatRecord<Image>> & import("mongoose").FlatRecord<Image> & Required<{
    _id: string;
}> & {
    __v: number;
}>;
