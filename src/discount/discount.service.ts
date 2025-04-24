// src/discount/discount.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Discount, DiscountDocument } from './discount.schema';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';

@Injectable()
export class DiscountService {
  constructor(
    @InjectModel(Discount.name) private discountModel: Model<DiscountDocument>,
  ) {}

  async create(createDiscountDto: CreateDiscountDto): Promise<Discount> {
    const discount = new this.discountModel(createDiscountDto);
    return discount.save();
  }

  async findAll(): Promise<Discount[]> {
    return this.discountModel.find().exec();
  }

  // async findOne(id: string): Promise<Discount> {
  //   const discount = await this.discountModel.findById(id);
  //   if (!discount) throw new NotFoundException('Discount not found');
  //   return discount;
  //   // console.log(id);
  // }
  async findOne(id: string): Promise<Discount> {
    console.log('Requested ID:', id); // 👈 Add this line
    const discount = await this.discountModel.findById(id);
    if (!discount) throw new NotFoundException('Discount not found');
    return discount;
  }

  async update(id: string, updateDto: UpdateDiscountDto): Promise<Discount> {
    const updated = await this.discountModel.findByIdAndUpdate(id, updateDto, {
      new: true,
    });
    if (!updated) throw new NotFoundException('Discount not found');
    return updated;
  }

  async remove(id: string): Promise<{ deleted: boolean }> {
    const result = await this.discountModel.findByIdAndDelete(id);
    if (!result) throw new NotFoundException('Discount not found');
    return { deleted: true };
  }
}
