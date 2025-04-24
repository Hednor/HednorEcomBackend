import { DiscountService } from './discount.service';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';
export declare class DiscountController {
    private readonly discountService;
    constructor(discountService: DiscountService);
    create(createDiscountDto: CreateDiscountDto): Promise<import("./discount.schema").Discount>;
    findAll(): Promise<import("./discount.schema").Discount[]>;
    findOne(id: string): Promise<import("./discount.schema").Discount>;
    update(id: string, updateDiscountDto: UpdateDiscountDto): Promise<import("./discount.schema").Discount>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
