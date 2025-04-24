export declare class CreateDiscountDto {
    name: string;
    type: string;
    value?: number;
    couponCode?: string;
    minOrderValue?: number;
    applicableCategories?: string[];
    applicableProducts?: string[];
    maxDiscountAmount?: number;
    isActive?: boolean;
    startDate?: Date;
    endDate?: Date;
}
