import { RefundService } from './refund.service';
import { CreateRefundInput } from './dto/create-refund.input';
import { Refund } from './refund.model';
import { UpdateRefundStatusInput } from './dto/update-refund-status.input';
export declare class RefundResolver {
    private refundService;
    constructor(refundService: RefundService);
    requestRefund(input: CreateRefundInput): Promise<Refund>;
    updateRefundStatus(input: UpdateRefundStatusInput): Promise<Refund>;
    refundsByUser(userId: string): Promise<Refund[]>;
}
