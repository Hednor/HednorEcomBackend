import { Controller, Post, Body } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './product.schema';

@Controller('product')
export class ProductController {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

  @Post('/create')
  async createProduct(@Body() body: any) {
    const createdProduct = new this.productModel(body);
    return await createdProduct.save();
  }
}
