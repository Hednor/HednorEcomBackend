declare class SyncItem {
    productId: string;
    quantity: number;
}
export declare class SyncCartDto {
    userId: string;
    anonymousItems: SyncItem[];
}
export {};
