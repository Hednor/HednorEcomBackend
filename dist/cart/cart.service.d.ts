import { Model } from 'mongoose';
import { Cart, CartDocument } from './schemas/cart.schema';
import { ProductDocument } from '../product/product.schema';
import { CartTokenDocument } from './schemas/cart-token.schema';
export declare class CartService {
    private cartModel;
    private productModel;
    private cartTokenModel;
    constructor(cartModel: Model<CartDocument>, productModel: Model<ProductDocument>, cartTokenModel: Model<CartTokenDocument>);
    private getCartByUserOrToken;
    getCart(userId: string | null, cartToken: string | null): Promise<CartDocument>;
    addItem(userId: string | null, cartToken: string | null, productId: string, quantity: number): Promise<any>;
    addItemAnonymous(cartToken: string, productId: string, quantity: number): Promise<import("mongoose").Document<unknown, {}, CartDocument> & Cart & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    updateItem(userId: string | null, cartToken: string | null, productId: string, quantity: number): Promise<any>;
    removeItem(userId: string | null, cartToken: string | null, productId: string): Promise<any>;
    syncCart(userId: string, cartToken: string): Promise<import("mongoose").Document<unknown, {}, CartDocument> & Cart & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
