import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Field, ID, ObjectType } from '@nestjs/graphql';

export type ImageDocument = Image & Document;

@ObjectType()
@Schema({ timestamps: true })
export class Image {
  @Field(() => ID)
  _id: string;

  @Field()
  @Prop({ required: true })
  url: string;

  @Field()
  @Prop({ required: true })
  color: string;

  @Field(() => [String])
  @Prop({ type: [String], required: true })
  images: string[];

  @Field()
  @Prop({ required: true })
  price: number;

  @Field()
  @Prop({ required: true })
  productId: string;
}

export const ImageSchema = SchemaFactory.createForClass(Image);
