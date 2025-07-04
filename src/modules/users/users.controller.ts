import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { User } from './schemas/user.schema';
import { UserService } from './users.service';
import { RegisterDto } from 'src/auth/dto/register.dto';
import { PaginationParamsDto } from '../parking-lot/dto/pagination-params.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: RegisterDto) {
    try {
      const user = await this.userService.create(createUserDto);
      return {
        statusCode: HttpStatus.CREATED,
        message: 'User created successfully',
        data: user,
      };
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to create parking lot',
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  async findAll(@Query() pagination: PaginationParamsDto) {
    try {
      const users = await this.userService.findAll(pagination);
      if (!users || !users.length) {
        throw new HttpException('No users found', HttpStatus.NOT_FOUND);
      }
      return {
        statusCode: HttpStatus.OK,
        message: 'Users retrieved successfully',
        data: users,
      };
    } catch (error) {
      throw new HttpException(
        error.message || 'Failed to fetch users',
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
