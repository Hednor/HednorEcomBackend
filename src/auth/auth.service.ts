import { Injectable, BadRequestException, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { User } from './Interface/user.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auth, AuthDocument } from './schemas/auth.schema';
import * as bcrypt from 'bcrypt';
  import { JwtService } from '@nestjs/jwt';
  import * as nodemailer from 'nodemailer';


@Injectable()
export class AuthService {
  
  constructor(
    @InjectModel(Auth.name) private authModel: Model<AuthDocument>,
    private jwtService: JwtService, // <-- yeh inject karna bhi zaruri hai
  ) {}

  async signup(dto: CreateAuthDto): Promise<{ message: string; user: Auth }> {
    const { username, email, password } = dto;
  
    const existingUser = await this.authModel.findOne({ email });
    if (existingUser) {
      throw new BadRequestException('User already exists');
    }
  
    // ✅ HASH the password before saving
    const hashedPassword = await bcrypt.hash(password, 10); // 10 = salt rounds
  
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

  async login(dto: LoginAuthDto): Promise<{ message: string; token: string }> {
    const { email, password } = dto;

    const user = await this.authModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // ✅ Compare password with hashed password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // ✅ Generate JWT token
    const payload = { id: user._id, email: user.email };
    const token = this.jwtService.sign(payload);

    return {
      message: 'Login successful',
      token,
    };
  }

  async forgotPassword(email: string): Promise<{ message: string }> {
    const user = await this.authModel.findOne({ email });
    if (!user) throw new NotFoundException('User not found');

    const payload = { email: user.email, id: user._id };
    const token = this.jwtService.sign(payload, { expiresIn: '10m' });

    const resetLink = `http://localhost:3000/auth/reset-password?token=${token}`; // frontend link if you have

    await this.sendResetEmail(user.email, resetLink);

    return { message: 'Reset link sent to your email' };
  }

  async resetPassword(token: string, newPassword: string): Promise<{ message: string }> {
    try {
      const decoded = this.jwtService.verify(token);
      const user = await this.authModel.findById(decoded.id);
      if (!user) throw new NotFoundException('User not found');

      const hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;
      await user.save();

      return { message: 'Password reset successfully' };
    } catch (err) {
      throw new BadRequestException('Invalid or expired token');
    }
  }

  private async sendResetEmail(to: string, link: string) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'prakastiwarichs@gmail.com', // 👈 replace
        pass: 'abcd efgh ijkl mnop',    // 👈 use App Password (not normal pass)
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
}
