import { DeductStockInput } from "src/inventory/dto/deduct-stock.input";
export declare class CreateOrderInput {
    orderId: string;
    status: string;
    totalAmount: number;
    coupanId?: string[];
    cartId: string;
    paymentId: string;
    userId: string;
    address: string;
    cartItems: DeductStockInput[];
}
