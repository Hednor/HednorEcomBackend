import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(body: any): Promise<import("./schemas/user.schema").User>;
}
