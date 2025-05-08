// src/inventory/inventory.service.ts

import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { product } from '../product/product.model';
import { DeductStockInput } from './dto/deduct-stock.input';

@Injectable()
export class InventoryService {
  constructor(
    @InjectModel(product.name) private productModel: Model<product>,
  ) {}

  async deductStock(items: DeductStockInput[]): Promise<void> {
    for (const item of items) {
      const product = await this.productModel.findById(item.productId);

      if (!product) {
        throw new NotFoundException(`Product ${item.productId} not found`);
      }

      if (product.stock < item.quantity) {
        throw new BadRequestException(`Insufficient stock for product ${product.name}`);
      }

      product.stock -= item.quantity;
      await product.save();
    }
  }


  async restoreStock(items: any[]) {
    for (const item of items) {
      const { productId, quantity } = item;
      await this.productModel.findByIdAndUpdate(productId, {
        $inc: { stock: quantity },
      });
    }
  }
  
}
