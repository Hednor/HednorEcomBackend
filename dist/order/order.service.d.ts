import { Order } from './schemas/order.schema';
import { Model } from 'mongoose';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderDeliveryInput } from './dto/update-order-delivery.input';
import { InventoryService } from 'src/inventory/inventory.service';
export declare class OrderService {
    private orderModel;
    private readonly inventoryService;
    constructor(orderModel: Model<Order>, inventoryService: InventoryService);
    createOrder(input: CreateOrderInput): Promise<Order>;
    updateOrderDelivery(input: UpdateOrderDeliveryInput): Promise<Order>;
    cancelOrder(orderId: string, userId: string): Promise<Order>;
}
