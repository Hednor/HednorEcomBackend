import { Refund, RefundDocument } from './refund.model';
import { Model } from 'mongoose';
import { CreateRefundInput } from './dto/create-refund.input';
import { UpdateRefundStatusInput } from './dto/update-refund-status.input';
import { Order } from '../order/schemas/order.schema';
import { EmailService } from 'src/email/email.service';
export declare class RefundService {
    private refundModel;
    private orderModel;
    private readonly emailService;
    constructor(refundModel: Model<RefundDocument>, orderModel: Model<Order>, emailService: EmailService);
    requestRefund(input: CreateRefundInput): Promise<Refund>;
    updateRefundStatus(input: UpdateRefundStatusInput): Promise<Refund>;
    getRefundsByUser(userId: string): Promise<Refund[]>;
}
