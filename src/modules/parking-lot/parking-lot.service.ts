import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ParkingLot, ParkingLotDocument } from './schemas/parking-lot.schema';
import { Model } from 'mongoose';
import { CreateParkingLotDto } from './dto/create-parking-lot.dto';
import { PaginationParamsDto } from './dto/pagination-params.dto';
import { UpdateParkingLotDto } from './dto/update-parking-lot.dto';

@Injectable()
export class ParkingLotService {
  constructor(
    @InjectModel(ParkingLot.name)
    private parkingLotModel: Model<ParkingLotDocument>,
  ) {}

  async create(createDto: CreateParkingLotDto): Promise<ParkingLot> {
    try {
      // Additional validation can go here
      const created = new this.parkingLotModel(createDto);
      return await created.save();
    } catch (error) {
      console.log(error.message || error);
      throw new ConflictException('Parking lot with this name already exists');
    }
  }

  async getOne(id: string): Promise<ParkingLot> {
    const found = await this.parkingLotModel.findById(id).exec();
    if (!found) {
      throw new NotFoundException('Parking lot not found');
    }
    return found;
  }

  async getAll(pagination?: PaginationParamsDto): Promise<ParkingLot[]> {
    // Implement pagination
    return this.parkingLotModel
      .find()
      .skip(pagination!.skip)
      .limit(pagination!.limit)
      .exec();
  }

  async update(
    id: string,
    updateDto: UpdateParkingLotDto,
  ): Promise<ParkingLot> {
    const updated = await this.parkingLotModel
      .findByIdAndUpdate(id, updateDto, { new: true })
      .exec();

    if (!updated) {
      throw new NotFoundException('Parking lot not found');
    }
    return updated;
  }

  async delete(id: string): Promise<void> {
    const result = await this.parkingLotModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Parking lot not found');
    }
  }
}
