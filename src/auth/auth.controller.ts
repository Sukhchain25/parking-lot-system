// src/auth/auth.controller.ts
import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AUTH_ROUTES, HTTP_STATUS_CODES } from './auth.constants';

@Controller(AUTH_ROUTES.BASE_PATH)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post(AUTH_ROUTES.REGISTER)
  @HttpCode(HTTP_STATUS_CODES.CREATED)
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post(AUTH_ROUTES.LOGIN)
  @HttpCode(HTTP_STATUS_CODES.OK)
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
