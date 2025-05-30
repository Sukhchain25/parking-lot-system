// src/auth/auth.service.ts
import { HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/modules/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user && (await bcrypt.compare(pass, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user._id, role: user.role };
    return {
      statusCode: HttpStatus.OK,
      message: 'Login successful',
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(userDto: any) {
    const existingUser = await this.usersService.findByEmail(userDto.email);
    if (existingUser) {
      throw new UnauthorizedException('Email already registered');
    }
    const hashedPassword = await bcrypt.hash(userDto.password, 10);
    await this.usersService.create({
      ...userDto,
      password: hashedPassword,
    });

    return {
      statusCode: HttpStatus.CREATED,
      message: 'User registered successfully',
    };
  }
}
