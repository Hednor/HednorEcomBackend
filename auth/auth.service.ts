import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { User } from './Interface/user.interface';

@Injectable()
export class AuthService {
  private users: User[] = [];

  async signup(createAuthDto: CreateAuthDto): Promise<{ message: string; user: User }> {
    const { username, email, password } = createAuthDto;
    const userExists = this.users.find((u) => u.email === email);
    if (userExists) throw new BadRequestException('User already exists');

    const newUser: User = { id: Date.now(), username, email, password };
    this.users.push(newUser);

    return {
      message: 'User registered successfully',
      user: newUser,
    };
  }

  async login(loginDto: LoginAuthDto): Promise<{ message: string; user: User }> {
    const { email, password } = loginDto;
    const user = this.users.find((u) => u.email === email && u.password === password);

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    return {
      message: 'Login successful',
      user,
    };
  }
}
