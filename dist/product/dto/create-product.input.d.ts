export declare class VariantInput {
    size?: string;
    color?: string;
}
export declare class CreateProductInput {
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
    variants?: VariantInput[];
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
