import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './product.schema';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

  async checkStock(productId: string, requestedQty: number): Promise<boolean> {
    const product = await this.productModel.findById(productId).exec();
    if (!product) return false;
    return requestedQty <= product.stock;
  }
}
