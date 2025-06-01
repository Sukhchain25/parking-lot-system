import { Controller, Get, Post, Body } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() body: Partial<User>) {
    return this.userService.create(body);
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }
}
