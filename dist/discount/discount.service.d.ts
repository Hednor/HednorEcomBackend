import { Model } from 'mongoose';
import { Discount, DiscountDocument } from './discount.schema';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';
export declare class DiscountService {
    private discountModel;
    constructor(discountModel: Model<DiscountDocument>);
    create(createDiscountDto: CreateDiscountDto): Promise<Discount>;
    findAll(): Promise<Discount[]>;
    findOne(id: string): Promise<Discount>;
    update(id: string, updateDto: UpdateDiscountDto): Promise<Discount>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
