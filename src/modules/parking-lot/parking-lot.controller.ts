import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ParkingLotService } from './parking-lot.service';
import { CreateParkingLotDto } from './dto/create-parking-lot.dto';
import { UpdateParkingLotDto } from './dto/update-parking-lot.dto';
import { PaginationParamsDto } from './dto/pagination-params.dto';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';

@ApiTags('Parking Lots')
@Controller('parking-lots')
export class ParkingLotController {
  constructor(private readonly parkingLotService: ParkingLotService) {}

  @Post()
  async create(@Body() createDto: CreateParkingLotDto) {
    try {
      const created = await this.parkingLotService.create(createDto);
      return {
        statusCode: HttpStatus.CREATED,
        message: 'Parking lot created successfully',
        data: created,
      };
    } catch (error: any) {
      throw new HttpException(
        error.message || 'Failed to create parking lot',
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  async findAll(@Query() pagination: PaginationParamsDto) {
    try {
      const data = await this.parkingLotService.getAll(pagination);
      return {
        statusCode: HttpStatus.OK,
        message: 'Parking lots fetched successfully',
        data,
      };
    } catch (error: any) {
      throw new HttpException(
        'Failed to fetch parking lots',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const data = await this.parkingLotService.getOne(id);
      return {
        statusCode: HttpStatus.OK,
        message: 'Parking lot fetched successfully',
        data,
      };
    } catch (error: any) {
      throw new HttpException(
        error.message || 'Failed to fetch parking lot',
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateParkingLotDto,
  ) {
    try {
      const data = await this.parkingLotService.update(id, updateDto);
      return {
        statusCode: HttpStatus.OK,
        message: 'Parking lot updated successfully',
        data,
      };
    } catch (error: any) {
      throw new HttpException(
        error.message || 'Failed to update parking lot',
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.parkingLotService.delete(id);
      return {
        statusCode: HttpStatus.OK,
        message: 'Parking lot deleted successfully',
      };
    } catch (error: any) {
      throw new HttpException(
        error.message || 'Failed to delete parking lot',
        error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
