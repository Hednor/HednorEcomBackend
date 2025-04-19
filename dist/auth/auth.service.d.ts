import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { Model } from 'mongoose';
import { Auth, AuthDocument } from './schemas/auth.schema';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private authModel;
    private jwtService;
    constructor(authModel: Model<AuthDocument>, jwtService: JwtService);
    signup(dto: CreateAuthDto): Promise<{
        message: string;
        user: Auth;
    }>;
    login(dto: LoginAuthDto): Promise<{
        message: string;
        token: string;
    }>;
    forgotPassword(email: string): Promise<{
        message: string;
    }>;
    resetPassword(token: string, newPassword: string): Promise<{
        message: string;
    }>;
    private sendResetEmail;
}
