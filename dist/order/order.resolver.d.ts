import { OrderService } from './order.service';
import { Order } from './schemas/order.schema';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderDeliveryInput } from './dto/update-order-delivery.input';
export declare class OrderResolver {
    private readonly orderService;
    constructor(orderService: OrderService);
    createOrder(input: CreateOrderInput): Promise<Order>;
    updateOrderDelivery(input: UpdateOrderDeliveryInput): Promise<Order>;
    cancelOrder(orderId: string, userId: string): Promise<Order>;
    testOrderQuery(): string;
}
