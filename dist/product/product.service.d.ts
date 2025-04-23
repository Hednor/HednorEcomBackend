import { Model } from 'mongoose';
import { ProductDocument } from './product.schema';
export declare class ProductService {
    private productModel;
    constructor(productModel: Model<ProductDocument>);
    checkStock(productId: string, requestedQty: number): Promise<boolean>;
}
