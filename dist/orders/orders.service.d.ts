import { Model } from 'mongoose';
import { Order } from './schemas/order.schema';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class OrdersService {
    private orderModel;
    constructor(orderModel: Model<Order>);
    create(createOrderDto: CreateOrderDto): Promise<Order>;
    findAll(filter?: any): Promise<Order[]>;
    findOne(id: string): Promise<Order | null>;
    updateStatus(id: string, updateOrderDto: UpdateOrderDto): Promise<Order | null>;
    findByUser(userId: string): Promise<Order[]>;
}
