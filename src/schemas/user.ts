import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: false, unique: true, index: true, sparse: true })
  nickname?: string;

  @Prop({ required: true, unique: true, index: true })
  email: string;

  @Prop({ required: true })
  nonce: string;

  @Prop({ required: true })
  nonceExpiration: Date;

  @Prop({ required: true, default: 0 })
  payouts: number;

  @Prop({ required: true, default: [] })
  ratings: number[];
}

export const UserSchema = SchemaFactory.createForClass(User);
