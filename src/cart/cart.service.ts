// cart.service.ts
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Types } from 'mongoose';

import { Cart, CartDocument } from './schemas/cart.schema'; // yahi tumhara schema import hai

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart.name) private cartModel: Model<CartDocument>,  // Model<CartDocument> use karna hai
  ) {}

  // Get Cart
  async getCart(userId: string): Promise<CartDocument> {
    let cart = await this.cartModel.findOne({ userId }).exec();
    if (!cart) {
      cart = new this.cartModel({ userId, cartId: new Date().getTime().toString(), products: [] });
      return await cart.save();
    }
    return cart;
  }

  // Add Item
  async addItem(userId: string, productId: string, quantity: number) {
    const cart = await this.getCart(userId);

    const itemIndex = cart.products.findIndex(item => item.product.toString() === productId);

    if (itemIndex >= 0) {
      cart.products[itemIndex].quantity += quantity; // Update quantity
    } else {
      cart.products.push({ product: new Types.ObjectId(productId), quantity }); // Add new product
    }

    return await cart.save();
  }

  // Update Item Quantity
  async updateItem(userId: string, productId: string, quantity: number) {
    const cart = await this.cartModel.findOne({ userId }).exec();
    if (!cart) throw new NotFoundException('Cart not found.');

    const item = cart.products.find(item => item.product.toString() === productId);
    if (!item) throw new NotFoundException('Item not found in cart.');

    if (quantity <= 0) {
      cart.products = cart.products.filter(item => item.product.toString() !== productId);
    } else {
      item.quantity = quantity;
    }

    return await cart.save();
  }

  // Remove Item
  async removeItem(userId: string, productId: string) {
    const cart = await this.cartModel.findOne({ userId }).exec();
    if (!cart) throw new NotFoundException('Cart not found.');

    cart.products = cart.products.filter(item => item.product.toString() !== productId);

    return await cart.save();
  }

  // Sync Cart (for anonymous cart merge after login)
  async syncCart(userId: string, anonymousItems: { productId: string; quantity: number }[]) {
    const cart = await this.getCart(userId);

    for (const newItem of anonymousItems) {
      const index = cart.products.findIndex(item => item.product.toString() === newItem.productId);

      if (index >= 0) {
        cart.products[index].quantity += newItem.quantity;
      } else {
        cart.products.push({ product: new Types.ObjectId(newItem.productId), quantity: newItem.quantity });
      }
    }

    return await cart.save();
  }
}
