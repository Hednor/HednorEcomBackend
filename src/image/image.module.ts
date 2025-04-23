import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ImageService } from './image.service';
import { ImageResolver } from './image.resolver';
import { Image, ImageSchema } from './schemas/image.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Image.name, schema: ImageSchema }])],
  providers: [ImageService, ImageResolver],
  exports: [ImageService],
})
export class ImageModule {}
