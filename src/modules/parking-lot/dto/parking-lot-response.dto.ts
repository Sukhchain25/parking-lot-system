import { ApiProperty } from '@nestjs/swagger';

export class ParkingLotResponseDto {
  @ApiProperty({ description: 'Unique identifier' })
  id: string;

  @ApiProperty({ description: 'Parking lot name' })
  name: string;

  @ApiProperty({ description: 'Physical location' })
  location: string;

  @ApiProperty({ description: 'Total parking spaces' })
  totalSpaces: number;

  @ApiProperty({ description: 'Available parking spaces' })
  availableSpaces: number;

  @ApiProperty({ description: 'Creation timestamp' })
  createdAt: Date;

  @ApiProperty({ description: 'Last update timestamp' })
  updatedAt: Date;
}
