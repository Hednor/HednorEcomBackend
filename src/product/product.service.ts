// src/product/product.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { CreateProductInput } from './dto/create-product.input';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private model: Model<ProductDocument>,
  ) {}

  create(input: CreateProductInput) {
    return this.model.create(input);
  }

  findAll() {
    return this.model.find().exec();
  }

  findOne(id: string) {
    return this.model.findById(id).exec();
  }

  update(id: string, updateProductInput: Partial<CreateProductInput>) {
    return this.model.findByIdAndUpdate(id, updateProductInput, { new: true }).exec();
  }
  
  remove(id: string) {
    return this.model.findByIdAndDelete(id).exec();
  }
}
