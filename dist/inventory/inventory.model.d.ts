import { Document } from 'mongoose';
export declare class Inventory extends Document {
    productId: string;
    quantity: number;
}
export declare const InventorySchema: import("mongoose").Schema<Inventory, import("mongoose").Model<Inventory, any, any, any, Document<unknown, any, Inventory> & Inventory & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Inventory, Document<unknown, {}, import("mongoose").FlatRecord<Inventory>> & import("mongoose").FlatRecord<Inventory> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
