// src/refund/refund.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Refund, RefundDocument } from './refund.model';
import { Model } from 'mongoose';
import { CreateRefundInput } from './dto/create-refund.input';
import { UpdateRefundStatusInput } from './dto/update-refund-status.input';
import { Order } from '../order/schemas/order.schema'; // Order schema ka import
import { EmailService } from 'src/email/email.service';


@Injectable()
export class RefundService {
  constructor(
    @InjectModel(Refund.name) private refundModel: Model<RefundDocument>,
    @InjectModel(Order.name) private orderModel: Model<Order>,
    private readonly emailService: EmailService,

    
  ) {}

  // async requestRefund(input: CreateRefundInput): Promise<Refund> {
  //   const existing = await this.refundModel.findOne({ orderId: input.orderId });
  //   if (existing) throw new Error('Refund already requested for this order.');

  //   const refund = new this.refundModel(input);
  //   return refund.save();
  // }


  async requestRefund(input: CreateRefundInput): Promise<Refund> {
    const existing = await this.refundModel.findOne({ orderId: input.orderId });
    if (existing) throw new Error('Refund already requested for this order.');

    const refund = new this.refundModel(input);
    const savedRefund = await refund.save();

    // 👇 Fetch order details
    const order = await this.orderModel.findOne({ orderId: input.orderId });

    // Assuming address is a stringified object or should be parsed
    let customerEmail = 'imranahmad9847@gmail.com';
    try {
      const parsedAddress = JSON.parse(order?.address || '{}');
      customerEmail = parsedAddress.email || customerEmail;
    } catch (err) {
      console.warn('Address parsing failed, using fallback email');
    }

    // 👇 Send Email
    await this.emailService.sendEmail({
      to: customerEmail,
      subject: 'Refund Request Received',
      text: `We have received your refund request for Order ID: ${input.orderId}. Our team will review it shortly.`,
      html: `
        <h2>Refund Request Submitted</h2>
        <p><strong>Order ID:</strong> ${input.orderId}</p>
        <p>Your refund request has been received successfully.</p>
        <p>We’ll notify you once it's reviewed and processed.</p>
        <p>Thank you for your patience.</p>
      `,
    });

    return savedRefund;
  }

  // async updateRefundStatus(input: UpdateRefundStatusInput): Promise<Refund> {
  //   const { orderId, status } = input;
  
  //   const refund = await this.refundModel.findOneAndUpdate(
  //     { orderId },
  //     { status },
  //     { new: true },
  //   );
  
  //   if (!refund) {
  //     throw new Error('Refund request not found');
  //   }
  
  //   return refund;
  // }

  async updateRefundStatus(input: UpdateRefundStatusInput): Promise<Refund> {
    const { orderId, status } = input;
  
    const refund = await this.refundModel.findOneAndUpdate(
      { orderId },
      { status },
      { new: true },
    );
  
    if (!refund) {
      throw new Error('Refund request not found');
    }
  
    // 👇 Get order details to fetch email
    const order = await this.orderModel.findOne({ orderId });
  
    // const customerEmail = order?.address?.email || 'fallback@example.com';

    const customerEmail = 'imranahmad9847@gmail.com';
  
    // 👇 Send email notification
    await this.emailService.sendEmail({
      to: customerEmail,
      subject: `Refund Status Updated: ${status}`,
      text: `Your refund request for Order ID: ${orderId} is now marked as "${status}".`,
      html: `
        <h2>Refund Status Updated</h2>
        <p><strong>Order ID:</strong> ${orderId}</p>
        <p><strong>Updated Status:</strong> ${status}</p>
        <p>We’ll keep you informed about further actions.</p>
        <p>Thanks for your patience!</p>
      `,
    });
  
    return refund;
  }
  

  async getRefundsByUser(userId: string): Promise<Refund[]> {
    return this.refundModel.find({ userId });
  }
}
