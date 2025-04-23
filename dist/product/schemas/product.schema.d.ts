import mongoose, { Document } from 'mongoose';
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
    images: string[];
    variants: {
        size?: string;
        color?: string;
    }[];
    tags: string[];
    dimensions?: string;
    featured: boolean;
    productType?: string;
    isDigital: boolean;
    shippingRegion?: string;
    returnPolicy?: string;
    bundle?: string;
    sellerId: string;
    categoryId: string;
    subCategoryId: string;
}
export declare const ProductSchema: mongoose.Schema<Product, mongoose.Model<Product, any, any, any, mongoose.Document<unknown, any, Product> & Product & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Product, mongoose.Document<unknown, {}, mongoose.FlatRecord<Product>> & mongoose.FlatRecord<Product> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
