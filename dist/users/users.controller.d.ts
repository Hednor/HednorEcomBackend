import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserFilterDto } from './dto/user-filter.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("./schemas/user.schema").User>;
    findAll(filter: UserFilterDto): Promise<import("./schemas/user.schema").User[]>;
    findOne(id: string): Promise<import("./schemas/user.schema").User | null>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./schemas/user.schema").User | null>;
    remove(id: string): Promise<import("./schemas/user.schema").User | null>;
    addAddress(userId: string, address: any): Promise<import("./schemas/user.schema").User | null>;
}
