import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { User } from './Interface/user.interface';
export declare class AuthService {
    private users;
    signup(createAuthDto: CreateAuthDto): Promise<{
        message: string;
        user: User;
    }>;
    login(loginDto: LoginAuthDto): Promise<{
        message: string;
        user: User;
    }>;
}
