import { Model } from 'mongoose';
import { Product, ProductDocument } from './product.schema';
export declare class ProductController {
    private productModel;
    constructor(productModel: Model<ProductDocument>);
    createProduct(body: any): Promise<import("mongoose").Document<unknown, {}, ProductDocument> & Product & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
