import { Model } from 'mongoose';
import { product } from '../product/product.model';
import { DeductStockInput } from './dto/deduct-stock.input';
export declare class InventoryService {
    private productModel;
    constructor(productModel: Model<product>);
    deductStock(items: DeductStockInput[]): Promise<void>;
    restoreStock(items: any[]): Promise<void>;
}
