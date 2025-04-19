"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const auth_schema_1 = require("./schemas/auth.schema");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const nodemailer = require("nodemailer");
let AuthService = class AuthService {
    authModel;
    jwtService;
    constructor(authModel, jwtService) {
        this.authModel = authModel;
        this.jwtService = jwtService;
    }
    async signup(dto) {
        const { username, email, password } = dto;
        const existingUser = await this.authModel.findOne({ email });
        if (existingUser) {
            throw new common_1.BadRequestException('User already exists');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new this.authModel({
            username,
            email,
            password: hashedPassword,
        });
        await newUser.save();
        return {
            message: 'User registered successfully',
            user: newUser,
        };
    }
    async login(dto) {
        const { email, password } = dto;
        const user = await this.authModel.findOne({ email });
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid email or password');
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            throw new common_1.UnauthorizedException('Invalid email or password');
        }
        const payload = { id: user._id, email: user.email };
        const token = this.jwtService.sign(payload);
        return {
            message: 'Login successful',
            token,
        };
    }
    async forgotPassword(email) {
        const user = await this.authModel.findOne({ email });
        if (!user)
            throw new common_1.NotFoundException('User not found');
        const payload = { email: user.email, id: user._id };
        const token = this.jwtService.sign(payload, { expiresIn: '10m' });
        const resetLink = `http://localhost:3000/auth/reset-password?token=${token}`;
        await this.sendResetEmail(user.email, resetLink);
        return { message: 'Reset link sent to your email' };
    }
    async resetPassword(token, newPassword) {
        try {
            const decoded = this.jwtService.verify(token);
            const user = await this.authModel.findById(decoded.id);
            if (!user)
                throw new common_1.NotFoundException('User not found');
            const hashedPassword = await bcrypt.hash(newPassword, 10);
            user.password = hashedPassword;
            await user.save();
            return { message: 'Password reset successfully' };
        }
        catch (err) {
            throw new common_1.BadRequestException('Invalid or expired token');
        }
    }
    async sendResetEmail(to, link) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'prakastiwarichs@gmail.com',
                pass: 'abcd efgh ijkl mnop',
            },
        });
        const mailOptions = {
            from: 'your_email@gmail.com',
            to,
            subject: 'Reset your password',
            html: `<p>Click the link below to reset your password:</p><a href="${link}">${link}</a>`,
        };
        await transporter.sendMail(mailOptions);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(auth_schema_1.Auth.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map