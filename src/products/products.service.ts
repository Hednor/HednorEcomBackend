import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Category, CategorySchema } from './schemas/category.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
    @InjectModel(Category.name) private categoryModel: Model<Category>
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }

  async findAll(filter: any = {}): Promise<Product[]> {
    return this.productModel.find(filter).exec();
  }

  async findOne(id: string): Promise<Product | null> {
    const product = await this.productModel.findById(id).exec();
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto): Promise<Product | null> {
    const product = await this.productModel.findByIdAndUpdate(id, updateProductDto, { new: true }).exec();
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  }

  async remove(id: string): Promise<Product | null> {
    const product = await this.productModel.findOneAndDelete({ _id: id }).exec();
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  }

  async getFeaturedProducts(): Promise<Product[]> {
    return this.productModel.find({ featured: true }).exec();
  }

  async getCategories(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }
}