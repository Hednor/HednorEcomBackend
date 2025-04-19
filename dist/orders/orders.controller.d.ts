import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderFilterDto } from './dto/order-filter.dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: CreateOrderDto): Promise<import("./schemas/order.schema").Order>;
    findAll(filter: OrderFilterDto): Promise<import("./schemas/order.schema").Order[]>;
    findOne(id: string): Promise<import("./schemas/order.schema").Order | null>;
    updateStatus(id: string, updateOrderDto: UpdateOrderDto): Promise<import("./schemas/order.schema").Order | null>;
    findByUser(userId: string): Promise<import("./schemas/order.schema").Order[]>;
}
