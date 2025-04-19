// src/product-category/product-category.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductCategory, ProductCategoryDocument } from './schemas/product-category.schema';
import { CreateProductCategoryInput } from './dto/create-product-category.input';
import { UpdateProductCategoryInput } from './dto/update-product-category.input';

@Injectable()
export class ProductCategoryService {
  constructor(
    @InjectModel(ProductCategory.name)
    private model: Model<ProductCategoryDocument>,
  ) {}

  create(input: CreateProductCategoryInput) {
    return this.model.create(input);
  }

  findAll() {
    return this.model.find().exec();
  }

  findOne(id: string) {
    return this.model.findById(id).exec();
  }

  update(id: string, input: UpdateProductCategoryInput) {
    return this.model.findByIdAndUpdate(id, input, { new: true }).exec();
  }

  remove(id: string) {
    return this.model.findByIdAndDelete(id).exec();
  }
}
