import { SchemaFactory, Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ParkingLotDocument = ParkingLot & Document;

@Schema({
  timestamps: true,
  versionKey: false,
})
export class ParkingLot {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true, type: Number, min: 0 })
  totalSlots: number;

  @Prop({ required: true, type: Number, min: 0 })
  availableSlots: number;

  @Prop({ default: Date.now })
  createdAt?: Date;

  @Prop({ default: Date.now })
  updatedAt?: Date;
}
export const ParkingLotSchema = SchemaFactory.createForClass(ParkingLot);
