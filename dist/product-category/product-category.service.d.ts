import { Model } from 'mongoose';
import { ProductCategory, ProductCategoryDocument } from './schemas/product-category.schema';
import { CreateProductCategoryInput } from './dto/create-product-category.input';
import { UpdateProductCategoryInput } from './dto/update-product-category.input';
export declare class ProductCategoryService {
    private model;
    constructor(model: Model<ProductCategoryDocument>);
    create(input: CreateProductCategoryInput): Promise<import("mongoose").Document<unknown, {}, ProductCategoryDocument> & ProductCategory & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, ProductCategoryDocument> & ProductCategory & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, ProductCategoryDocument> & ProductCategory & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    update(id: string, input: UpdateProductCategoryInput): Promise<(import("mongoose").Document<unknown, {}, ProductCategoryDocument> & ProductCategory & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    remove(id: string): Promise<(import("mongoose").Document<unknown, {}, ProductCategoryDocument> & ProductCategory & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
