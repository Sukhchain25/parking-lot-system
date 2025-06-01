import { PartialType } from '@nestjs/mapped-types';
import { CreateParkingLotDto } from './create-parking-lot.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateParkingLotDto extends PartialType(CreateParkingLotDto) {
  @ApiPropertyOptional()
  name?: string;

  @ApiPropertyOptional()
  location?: string;

  @ApiPropertyOptional()
  totalSpaces?: number;

  @ApiPropertyOptional()
  availableSpaces?: number;
}
