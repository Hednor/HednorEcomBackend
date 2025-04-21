import { InventoryService } from './inventory.service';
import { DeductStockInput } from './dto/deduct-stock.input';
export declare class InventoryResolver {
    private readonly inventoryService;
    constructor(inventoryService: InventoryService);
    deductStock(items: DeductStockInput[]): Promise<string>;
}
