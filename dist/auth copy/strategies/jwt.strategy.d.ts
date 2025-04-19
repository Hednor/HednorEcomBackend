import { Strategy } from 'passport-jwt';
import { User } from '../../users/schemas/user.schema';
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: User): Promise<{
        userId: unknown;
        email: string;
        role: import("../../users/schemas/user.schema").Role;
    }>;
}
export {};
