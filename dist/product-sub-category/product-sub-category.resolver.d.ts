import { ProductSubCategoryService } from './product-sub-category.service';
import { CreateProductSubCategoryInput } from './dto/create-product-sub-category.input';
import { UpdateProductSubCategoryInput } from './dto/update-product-sub-category.input';
export declare class ProductSubCategoryResolver {
    private readonly service;
    constructor(service: ProductSubCategoryService);
    createProductSubCategory(input: CreateProductSubCategoryInput): Promise<import("mongoose").Document<unknown, {}, import("./schemas/product-sub-category.schema").ProductSubCategoryDocument> & import("./schemas/product-sub-category.schema").ProductSubCategory & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAllProductSubCategories(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/product-sub-category.schema").ProductSubCategoryDocument> & import("./schemas/product-sub-category.schema").ProductSubCategory & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findProductSubCategory(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/product-sub-category.schema").ProductSubCategoryDocument> & import("./schemas/product-sub-category.schema").ProductSubCategory & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    updateProductSubCategory(input: UpdateProductSubCategoryInput): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/product-sub-category.schema").ProductSubCategoryDocument> & import("./schemas/product-sub-category.schema").ProductSubCategory & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    removeProductSubCategory(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/product-sub-category.schema").ProductSubCategoryDocument> & import("./schemas/product-sub-category.schema").ProductSubCategory & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
