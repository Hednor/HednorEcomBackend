import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Cart, CartDocument } from './schemas/cart.schema';
import { Product, ProductDocument } from '../product/product.schema';
import {CartToken, CartTokenDocument } from './schemas/cart-token.schema';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart.name) private cartModel: Model<CartDocument>,
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
    @InjectModel(CartToken.name) private cartTokenModel: Model<CartTokenDocument>, 
  ) {}

  // Helper method to get the cart
  private async getCartByUserOrToken(userId: string | null, cartToken: string | null) {
    let cart;
    if (userId) {
      cart = await this.cartModel.findOne({ userId });
    } else if (cartToken) {
      cart = await this.cartModel.findOne({ cartToken });
    }
    return cart;
  }

  async getCart(userId: string | null, cartToken: string | null): Promise<CartDocument> {
    let cart = await this.getCartByUserOrToken(userId, cartToken);

    if (!cart) {
      cart = new this.cartModel({ userId: userId || cartToken, items: [] });
    }

    return cart;
  }


async addItem(userId: string | null, cartToken: string | null, productId: string, quantity: number) {
  let cart;
  if (userId) {
    cart = await this.cartModel.findOne({ userId });
  } else if (cartToken) {
    cart = await this.cartModel.findOne({ cartToken });
  }

  if (!cart) {
    cart = new this.cartModel({ userId: userId || cartToken, items: [] });
  }

  const product = await this.productModel.findById(productId);
  if (!product) {
    throw new BadRequestException('Product Not Found');
  }

  const cartItems = cart.items;
  const existingItem = cartItems.find((item) => item.productId.toString() === productId);

  if (existingItem) {
    if (existingItem.quantity + quantity > product.stock) {
      throw new BadRequestException(`Total quantity exceeds stock limit`);
    }
    existingItem.quantity += quantity;
  } else {
    cartItems.push({ productId: new Types.ObjectId(productId), quantity });
  }

  await cart.save();
  return cart;
}


  async addItemAnonymous(cartToken: string, productId: string, quantity: number) {
    const product = await this.productModel.findById(productId);
    if (!product) {
      throw new BadRequestException('Product Not Found');
    }

    if (quantity > product.stock) {
      throw new BadRequestException(`Requested quantity exceeds available stock`);
    }

    let cart = await this.cartModel.findOne({ cartToken });

    if (!cart) {
      cart = new this.cartModel({ cartToken, items: [] });
    }

    const cartItems = cart.items;
    const existingItem = cartItems.find((item) => item.productId.toString() === productId);

    if (existingItem) {
      if (existingItem.quantity + quantity > product.stock) {
        throw new BadRequestException(`Total quantity exceeds stock limit`);
      }
      existingItem.quantity += quantity;
    } else {
      cartItems.push({ productId: new Types.ObjectId(productId), quantity });
    }

    await cart.save();
    return cart;
  }

  async updateItem(userId: string | null, cartToken: string | null, productId: string, quantity: number) {
    const product = await this.productModel.findById(productId);
    if (!product) {
      throw new BadRequestException('Product Not Found');
    }

    if (quantity > product.stock) {
      throw new BadRequestException(`Requested quantity exceeds available stock`);
    }

    let cart = await this.getCartByUserOrToken(userId, cartToken);

    if (!cart) throw new NotFoundException('Cart not found.');

    const cartItems = cart.items;
    const itemIndex = cartItems.findIndex(item => item.productId.toString() === productId);
    if (itemIndex === -1) throw new NotFoundException('Item not found in cart.');

    cartItems[itemIndex].quantity = quantity;
    return await cart.save();
  }

  async removeItem(userId: string | null, cartToken: string | null, productId: string) {
    let cart = await this.getCartByUserOrToken(userId, cartToken);

    if (!cart) throw new NotFoundException('Cart not found.');

    const cartItems = cart.items;
    const itemIndex = cartItems.findIndex(item => item.productId.toString() === productId);
    if (itemIndex === -1) throw new NotFoundException('Item not found in cart.');

    cartItems.splice(itemIndex, 1); // Removing the item from cart
    await cart.save();

    return cart;
  }

  async syncCart(userId: string, cartToken: string) {
    const anonymousCart = await this.cartModel.findOne({ cartToken });
    if (!anonymousCart) throw new NotFoundException('Anonymous cart not found.');

    let loggedInCart = await this.cartModel.findOne({ userId });
    if (!loggedInCart) {
      loggedInCart = new this.cartModel({ userId, items: [] });
    }

    for (const item of anonymousCart.items) {
      const existingItem = loggedInCart.items.find((cartItem) => cartItem.productId.toString() === item.productId.toString());

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        loggedInCart.items.push(item);
      }
    }

    await loggedInCart.save();
    await this.cartModel.deleteOne({ cartToken });

    return loggedInCart;
  }
}
