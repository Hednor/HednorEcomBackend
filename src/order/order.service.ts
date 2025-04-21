// src/order/order.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from './schemas/order.schema';
import { Model } from 'mongoose';

import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderDeliveryInput } from './dto/update-order-delivery.input';
import { InventoryService } from 'src/inventory/inventory.service';
import { DeductStockInput } from 'src/inventory/dto/deduct-stock.input';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<Order>,
    private readonly inventoryService: InventoryService,
  ) {}

  async createOrder(input: CreateOrderInput): Promise<Order> {
    const { userId, cartItems, totalAmount, coupanId, paymentId, cartId } = input;

    // ✅ Step 1: Prepare stock deduction input
    const stockItems: DeductStockInput[] = cartItems.map(item => ({
      productId: item.productId,
      quantity: item.quantity,
    }));

    // ✅ Step 2: Deduct stock from inventory
    await this.inventoryService.deductStock(stockItems);

    // ✅ Step 3: Create new order
    const newOrder = new this.orderModel({
      userId,
      cartId,
      
      paymentId,
      totalAmount,
      coupanId,
      orderId: input.orderId,
      address: input.address,
  tracking: '', // default
      status: 'Pending', // default
      createdAt: new Date(),
    });

    return await newOrder.save();
  }
  async updateOrderDelivery(input: UpdateOrderDeliveryInput): Promise<Order> {
    const { orderId, status, tracking } = input;
  
    const updateFields: any = {};
    if (status) updateFields.status = status;
    if (tracking) updateFields.tracking = tracking;
  
    const order = await this.orderModel.findOneAndUpdate(
      { orderId },
      updateFields,
      { new: true },
    );
  
    if (!order) {
      throw new NotFoundException('Order not found');
    }
  
    return order;
  }
  

  
}
