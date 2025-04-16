"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
let AuthService = class AuthService {
    users = [];
    async signup(createAuthDto) {
        const { username, email, password } = createAuthDto;
        const userExists = this.users.find((u) => u.email === email);
        if (userExists)
            throw new common_1.BadRequestException('User already exists');
        const newUser = { id: Date.now(), username, email, password };
        this.users.push(newUser);
        return {
            message: 'User registered successfully',
            user: newUser,
        };
    }
    async login(loginDto) {
        const { email, password } = loginDto;
        const user = this.users.find((u) => u.email === email && u.password === password);
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid email or password');
        }
        return {
            message: 'Login successful',
            user,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
//# sourceMappingURL=auth.service.js.map