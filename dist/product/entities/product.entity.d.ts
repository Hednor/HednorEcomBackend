import { ProductCategory } from 'src/product-category/entities/product-category.entity';
import { ProductSubCategory } from 'src/product-sub-category/entities/product-sub-category.entity';
export declare class Variant {
    size?: string;
    color?: string;
}
export declare class Product {
    _id: string;
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
    images: string[];
    variants: Variant[];
    tags: string[];
    dimensions?: string;
    featured: boolean;
    productType?: string;
    isDigital: boolean;
    shippingRegion?: string;
    returnPolicy?: string;
    bundle?: string;
    sellerId: string;
    category: ProductCategory;
    subCategory: ProductSubCategory;
}
