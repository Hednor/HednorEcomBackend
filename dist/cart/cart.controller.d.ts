import { CartService } from './cart.service';
import { AddItemDto } from './dto/add-item.dto';
import { SyncCartDto } from './dto/sync-cart.dto';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    addItem(addItemDto: AddItemDto): Promise<import("./schemas/cart.schema").CartDocument>;
    updateItem(addItemDto: AddItemDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/cart.schema").CartDocument> & import("./schemas/cart.schema").Cart & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    removeItem(userId: string, productId: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/cart.schema").CartDocument> & import("./schemas/cart.schema").Cart & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    syncCart(syncCartDto: SyncCartDto): Promise<import("./schemas/cart.schema").CartDocument>;
    findAll(): string;
}
