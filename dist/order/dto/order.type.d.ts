import { OrderItemType } from './order-item.type';
export declare class OrderType {
    _id: string;
    orderId: string;
    totalAmount: number;
    coupanIds: string[];
    status: string;
    cartId: string;
    paymentId: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    address: string;
    tracking: string;
    orderStatus: string;
    items: OrderItemType[];
}
