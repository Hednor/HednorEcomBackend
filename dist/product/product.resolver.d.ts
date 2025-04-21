import { ProductService } from './product.service';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { ProductCategory, ProductCategoryDocument } from 'src/product-category/schemas/product-category.schema';
import { ProductSubCategory, ProductSubCategoryDocument } from 'src/product-sub-category/schemas/product-sub-category.schema';
import { Model } from 'mongoose';
import { ProductDocument } from './schemas/product.schema';
export declare class ProductResolver {
    private readonly productService;
    private categoryModel;
    private subCategoryModel;
    constructor(productService: ProductService, categoryModel: Model<ProductCategoryDocument>, subCategoryModel: Model<ProductSubCategoryDocument>);
    createProduct(input: CreateProductInput): Promise<import("mongoose").Document<unknown, {}, ProductDocument> & import("./schemas/product.schema").Product & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAllProducts(): Promise<(import("mongoose").Document<unknown, {}, ProductDocument> & import("./schemas/product.schema").Product & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findProduct(id: string): Promise<(import("mongoose").Document<unknown, {}, ProductDocument> & import("./schemas/product.schema").Product & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    updateProduct(input: UpdateProductInput): Promise<(import("mongoose").Document<unknown, {}, ProductDocument> & import("./schemas/product.schema").Product & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    removeProduct(id: string): Promise<(import("mongoose").Document<unknown, {}, ProductDocument> & import("./schemas/product.schema").Product & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    category(product: ProductDocument): Promise<(import("mongoose").Document<unknown, {}, ProductCategoryDocument> & ProductCategory & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    subCategory(product: ProductDocument): Promise<(import("mongoose").Document<unknown, {}, ProductSubCategoryDocument> & ProductSubCategory & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
