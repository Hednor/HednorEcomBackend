import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(createAuthDto: CreateAuthDto): Promise<{
        message: string;
        user: import("./Interface/user.interface").User;
    }>;
    login(loginAuthDto: LoginAuthDto): Promise<{
        message: string;
        user: import("./Interface/user.interface").User;
    }>;
}
