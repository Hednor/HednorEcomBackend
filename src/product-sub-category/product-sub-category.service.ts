// src/product-sub-category/product-sub-category.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductSubCategory, ProductSubCategoryDocument } from './schemas/product-sub-category.schema';
import { CreateProductSubCategoryInput } from './dto/create-product-sub-category.input';

@Injectable()
export class ProductSubCategoryService {
  constructor(
    @InjectModel(ProductSubCategory.name)
    private model: Model<ProductSubCategoryDocument>,
  ) {}

  create(input: CreateProductSubCategoryInput) {
    return this.model.create(input);
  }

  findAll() {
    return this.model.find().exec();
  }

  findOne(id: string) {
    return this.model.findById(id).exec();
  }

  update(id: string, input: Partial<CreateProductSubCategoryInput>) {
    return this.model.findByIdAndUpdate(id, input, { new: true }).exec();
  }
  
  remove(id: string) {
    return this.model.findByIdAndDelete(id).exec();
  }
}
