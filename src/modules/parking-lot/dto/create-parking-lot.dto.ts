// create-parking-lot.dto.ts
import { IsString, IsNumber, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateParkingLotDto {
  @ApiProperty({
    description: 'The unique name of the parking lot',
    example: 'Central Mall Parking',
    required: true,
    type: String,
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Physical address of the parking lot',
    example: '123 Main Street, Downtown',
    required: true,
    type: String,
  })
  @IsString()
  location: string;

  @ApiProperty({
    description: 'Total number of parking slots in the lot',
    example: 200,
    minimum: 1,
    required: true,
    type: Number,
  })
  @IsNumber()
  @Min(1)
  totalSlots: number;

  @ApiProperty({
    description: 'Number of currently available parking slots',
    example: 200,
    minimum: 0,
    required: true,
    type: Number,
  })
  @IsNumber()
  @Min(0)
  availableSlots: number;
}
