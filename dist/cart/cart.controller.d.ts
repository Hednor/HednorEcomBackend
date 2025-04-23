import { CartService } from './cart.service';
import { AddItemDto } from './dto/add-item.dto';
import { RemoveItemDto } from './dto/remove-item.dto';
import { SyncCartDto } from './dto/sync-cart.dto';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    addToCart(body: AddItemDto): Promise<any>;
    updateItem(body: AddItemDto): Promise<any>;
    removeItem(userId: string, productId: string, body: RemoveItemDto): Promise<any>;
    syncCart(userId: string, body: SyncCartDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/cart.schema").CartDocument> & import("./schemas/cart.schema").Cart & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    getCart(userId: string): Promise<import("./schemas/cart.schema").CartDocument>;
}
