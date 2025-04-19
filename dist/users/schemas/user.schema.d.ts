import { Document } from 'mongoose';
export declare enum Role {
    CUSTOMER = "CUSTOMER",
    ADMIN = "ADMIN"
}
export declare class User extends Document {
    userId: string;
    userName: string;
    email: string;
    password: string;
    phoneNo: string;
    role: Role;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, Document<unknown, any, User> & User & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
