import { Module } from '@nestjs/common';
import { ParkingLotController } from './parking-lot.controller';
import { ParkingLotService } from './parking-lot.service';
import { ParkingLot, ParkingLotSchema } from './schemas/parking-lot.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [ParkingLotController],
  providers: [ParkingLotService],
  exports: [ParkingLotService],
  imports: [
    MongooseModule.forFeature([
      { name: ParkingLot.name, schema: ParkingLotSchema },
    ]),
  ],
})
export class ParkingLotModule {}
