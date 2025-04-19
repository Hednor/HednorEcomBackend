import { Model } from 'mongoose';
import { ProductSubCategory, ProductSubCategoryDocument } from './schemas/product-sub-category.schema';
import { CreateProductSubCategoryInput } from './dto/create-product-sub-category.input';
export declare class ProductSubCategoryService {
    private model;
    constructor(model: Model<ProductSubCategoryDocument>);
    create(input: CreateProductSubCategoryInput): Promise<import("mongoose").Document<unknown, {}, ProductSubCategoryDocument> & ProductSubCategory & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, ProductSubCategoryDocument> & ProductSubCategory & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, ProductSubCategoryDocument> & ProductSubCategory & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    update(id: string, input: Partial<CreateProductSubCategoryInput>): Promise<(import("mongoose").Document<unknown, {}, ProductSubCategoryDocument> & ProductSubCategory & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    remove(id: string): Promise<(import("mongoose").Document<unknown, {}, ProductSubCategoryDocument> & ProductSubCategory & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
