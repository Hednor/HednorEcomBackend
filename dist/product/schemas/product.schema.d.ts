import { Document } from 'mongoose';
export type ProductDocument = Product & Document;
export declare class Product {
    productId: string;
    name: string;
    description: string;
    price: number;
    salePrice?: number;
    sku: string;
    stock: number;
    brand: string;
    manufacturer?: string;
    material?: string;
    warranty?: string;
    expirationDate?: Date;
    barcode?: string;
    rating?: number;
    ratingCount?: number;
    shippingWeight?: number;
    availabilityStatus: string;
    createdAt: Date;
    updatedAt: Date;
    tags: string[];
    dimensions?: string;
    featured: boolean;
    productType?: string;
    isDigital: boolean;
    shippingRegion?: string;
    returnPolicy?: string;
    bundle?: string;
    category: string;
    sellerId: string;
}
export declare const ProductSchema: import("mongoose").Schema<Product, import("mongoose").Model<Product, any, any, any, Document<unknown, any, Product> & Product & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Product, Document<unknown, {}, import("mongoose").FlatRecord<Product>> & import("mongoose").FlatRecord<Product> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
