import { ProductCategoryService } from './product-category.service';
import { CreateProductCategoryInput } from './dto/create-product-category.input';
import { UpdateProductCategoryInput } from './dto/update-product-category.input';
export declare class ProductCategoryResolver {
    private readonly service;
    constructor(service: ProductCategoryService);
    createProductCategory(input: CreateProductCategoryInput): Promise<import("mongoose").Document<unknown, {}, import("./schemas/product-category.schema").ProductCategoryDocument> & import("./schemas/product-category.schema").ProductCategory & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAllProductCategories(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/product-category.schema").ProductCategoryDocument> & import("./schemas/product-category.schema").ProductCategory & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findProductCategory(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/product-category.schema").ProductCategoryDocument> & import("./schemas/product-category.schema").ProductCategory & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    updateProductCategory(input: UpdateProductCategoryInput): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/product-category.schema").ProductCategoryDocument> & import("./schemas/product-category.schema").ProductCategory & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    removeProductCategory(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/product-category.schema").ProductCategoryDocument> & import("./schemas/product-category.schema").ProductCategory & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
