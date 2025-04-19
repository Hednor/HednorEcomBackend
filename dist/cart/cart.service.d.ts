import { Model } from 'mongoose';
import { Cart, CartDocument } from './schemas/cart.schema';
export declare class CartService {
    private cartModel;
    constructor(cartModel: Model<CartDocument>);
    getCart(userId: string): Promise<CartDocument>;
    addItem(userId: string, productId: string, quantity: number): Promise<CartDocument>;
    updateItem(userId: string, productId: string, quantity: number): Promise<import("mongoose").Document<unknown, {}, CartDocument> & Cart & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    removeItem(userId: string, productId: string): Promise<import("mongoose").Document<unknown, {}, CartDocument> & Cart & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    syncCart(userId: string, anonymousItems: {
        productId: string;
        quantity: number;
    }[]): Promise<CartDocument>;
}
