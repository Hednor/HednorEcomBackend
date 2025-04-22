import { Refund, RefundDocument } from './refund.model';
import { Model } from 'mongoose';
import { CreateRefundInput } from './dto/create-refund.input';
import { UpdateRefundStatusInput } from './dto/update-refund-status.input';
export declare class RefundService {
    private refundModel;
    constructor(refundModel: Model<RefundDocument>);
    requestRefund(input: CreateRefundInput): Promise<Refund>;
    updateRefundStatus(input: UpdateRefundStatusInput): Promise<Refund>;
    getRefundsByUser(userId: string): Promise<Refund[]>;
}
