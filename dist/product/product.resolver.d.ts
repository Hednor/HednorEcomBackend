import { ProductService } from './product.service';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
export declare class ProductResolver {
    private readonly service;
    constructor(service: ProductService);
    createProduct(input: CreateProductInput): Promise<import("mongoose").Document<unknown, {}, import("./schemas/product.schema").ProductDocument> & import("./schemas/product.schema").Product & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAllProducts(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/product.schema").ProductDocument> & import("./schemas/product.schema").Product & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findProduct(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/product.schema").ProductDocument> & import("./schemas/product.schema").Product & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    updateProduct(input: UpdateProductInput): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/product.schema").ProductDocument> & import("./schemas/product.schema").Product & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    removeProduct(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/product.schema").ProductDocument> & import("./schemas/product.schema").Product & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
}
