import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Image, ImageDocument } from './schemas/image.schema';
import { CreateImageInput } from './dto/create-image.input';
import { UpdateImageInput } from './dto/update-image.input';

@Injectable()
export class ImageService {
  constructor(
    @InjectModel(Image.name) private imageModel: Model<ImageDocument>,
  ) {}

  async create(input: CreateImageInput): Promise<Image> {
    const created = new this.imageModel(input);
    return created.save();
  }

  async findAll(): Promise<Image[]> {
    return this.imageModel.find().exec();
  }

  async findOne(id: string): Promise<Image> {
    const image = await this.imageModel.findById(id);
    if (!image) throw new NotFoundException('Image not found');
    return image;
  }

  async update(id: string, input: UpdateImageInput): Promise<Image> {
    const updated = await this.imageModel.findByIdAndUpdate(id, input, {
      new: true,
    });
    if (!updated) throw new NotFoundException('Image not found');
    return updated;
  }

  async remove(id: string): Promise<Image> {
    const deleted = await this.imageModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException('Image not found');
    return deleted;
  }
}
