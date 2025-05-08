import { Order } from './schemas/order.schema';
import { Model } from 'mongoose';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderDeliveryInput } from './dto/update-order-delivery.input';
import { InventoryService } from 'src/inventory/inventory.service';
import { EmailService } from 'src/email/email.service';
export declare class OrderService {
    private orderModel;
    private readonly inventoryService;
    private readonly emailService;
    constructor(orderModel: Model<Order>, inventoryService: InventoryService, emailService: EmailService);
    createOrder(input: CreateOrderInput): Promise<Order>;
    updateOrderDelivery(input: UpdateOrderDeliveryInput): Promise<Order>;
    cancelOrder(orderId: string, userId: string): Promise<Order>;
}
