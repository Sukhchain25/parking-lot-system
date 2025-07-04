import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { PaginationParamsDto } from '../parking-lot/dto/pagination-params.dto';
import { RegisterDto } from 'src/auth/dto/register.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(data: RegisterDto): Promise<User> {
    return this.userModel.create(data);
  }

  async findAll(pagination: PaginationParamsDto): Promise<User[]> {
    return this.userModel
      .find()
      .select('-password -__v')
      .skip(pagination.skip)
      .limit(pagination.limit)
      .exec();
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }
}
