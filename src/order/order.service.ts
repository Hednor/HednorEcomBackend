// src/order/order.service.ts
import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from './schemas/order.schema';
import { Model } from 'mongoose';

import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderDeliveryInput } from './dto/update-order-delivery.input';
import { InventoryService } from 'src/inventory/inventory.service';
import { DeductStockInput } from 'src/inventory/dto/deduct-stock.input';
import { EmailService } from 'src/email/email.service';



@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<Order>,
    
    
    private readonly inventoryService: InventoryService,
    private readonly emailService: EmailService,
  
    
  ) {}

  async createOrder(input: CreateOrderInput): Promise<Order> {
    const { userId, cartItems, totalAmount, coupanId, paymentId, cartId} = input;

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
      status: 'pending', // default
      createdAt: new Date(),
      
    });

    return await newOrder.save();
  }

  // async createOrder(input: CreateOrderInput): Promise<Order> {
  //   const { userId, cartItems, totalAmount, coupanId, paymentId, cartId } = input;
  
  //   // ✅ Step 1: Prepare stock deduction input
  //   const stockItems = cartItems.map(item => ({
  //     productId: item.productId,
  //     quantity: item.quantity,
  //   }));
  
  //   // ✅ Step 2: Deduct stock
  //   await this.inventoryService.deductStock(stockItems);
  
  //   // ✅ Step 3: Create the order
  //   const newOrder = new this.orderModel({
  //     userId,
  //     cartId,
  //     paymentId,
  //     totalAmount,
  //     coupanId,
  //     orderId: input.orderId,
  //     address: input.address,
  //     tracking: '',
  //     status: 'pending',
  //     createdAt: new Date(),
  //   });
  
  //   const savedOrder = await newOrder.save();
  
  //   // ✅ Step 4: Send email (hardcoded email ya input me se lo)
  //   const customerEmail = 'imranahmad9847@gmail.com'; // 👈 Replace this or take from input.address.email etc.
  
  //   await this.emailService.sendEmail({
  //     to: customerEmail,
  //     subject: 'Order Confirmation',
  //     text: `Your order (${input.orderId}) has been placed successfully.`,
  //     html: `
  //       <h2>Thanks for your order!</h2>
  //       <p><strong>Order ID:</strong> ${input.orderId}</p>
  //       <p><strong>Total:</strong> ₹${totalAmount}</p>
  //     `,
  //   });
  
  //   return savedOrder;
  // }
  
  

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


  async cancelOrder(orderId: string, userId: string): Promise<Order> {
    // const order = await this.orderModel.findById(orderId);
    const order = await this.orderModel.findOne({ orderId }); // 👈 yeh line update ki
  
    if (!order) {
      throw new NotFoundException('Order not found');
    }
  
    // Check if user owns this order (or is admin)
    if (order.userId.toString() !== userId.toString()) {
      throw new ForbiddenException('You are not allowed to cancel this order');
    }
  
    // Allow cancellation only if status is pending or confirmed
    if (!['pending', 'confirmed'].includes(order.status)) {
      throw new BadRequestException('Order cannot be cancelled at this stage');
    }
  
    // Update status
    order.status = 'cancelled';
    await order.save();
  
    // Restore inventory
    await this.inventoryService.restoreStock(order.items);
  
    return order;
  }
  
  

  
}
