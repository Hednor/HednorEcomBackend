// src/refund/refund.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Refund, RefundDocument } from './refund.model';
import { Model } from 'mongoose';
import { CreateRefundInput } from './dto/create-refund.input';
import { UpdateRefundStatusInput } from './dto/update-refund-status.input';

@Injectable()
export class RefundService {
  constructor(
    @InjectModel(Refund.name) private refundModel: Model<RefundDocument>,
  ) {}

  async requestRefund(input: CreateRefundInput): Promise<Refund> {
    const existing = await this.refundModel.findOne({ orderId: input.orderId });
    if (existing) throw new Error('Refund already requested for this order.');

    const refund = new this.refundModel(input);
    return refund.save();
  }

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
  
    return refund;
  }

  async getRefundsByUser(userId: string): Promise<Refund[]> {
    return this.refundModel.find({ userId });
  }
}
