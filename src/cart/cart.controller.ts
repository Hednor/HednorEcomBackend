import { Body, Controller, Post, Param, Put, Delete, Get } from '@nestjs/common';
import { CartService } from './cart.service';
import { AddItemDto } from './dto/add-item.dto';
import { RemoveItemDto } from './dto/remove-item.dto';
import { SyncCartDto } from './dto/sync-cart.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('add')
  async addToCart(@Body() body: AddItemDto) {
    try {
      const cartToken: string | null = body.cartToken ?? null;
      const userId: string | null = body.userId ?? null;

      if (userId) {
        return await this.cartService.addItem(
          userId,
          cartToken,
          body.productId,
          body.quantity,
        );
      } else if (cartToken) {
        return await this.cartService.addItemAnonymous(
          cartToken,
          body.productId,
          body.quantity,
        );
      } else {
        throw new Error('Either userId or cartToken must be provided.');
      }
    } catch (error) {
      console.error('Error in addToCart:', error);
      throw error;
    }
  }

  @Put('update')
  async updateItem(@Body() body: AddItemDto) {
    const cartToken: string | null = body.cartToken ?? null;
    const userId: string | null = body.userId ?? null;

    if (!userId && !cartToken) {
      throw new Error('Either userId or cartToken must be provided.');
    }

    return await this.cartService.updateItem(
      userId,
      cartToken,
      body.productId,
      body.quantity,
    );
  }

  @Delete('remove/:userId/:productId')
  async removeItem(
    @Param('userId') userId: string,
    @Param('productId') productId: string,
    @Body() body: RemoveItemDto,
  ) {
    const cartToken: string | null = body.cartToken ?? null;

    return await this.cartService.removeItem(
      userId || null,
      cartToken,
      productId,
    );
  }

  @Put('sync/:userId')
  async syncCart(@Param('userId') userId: string, @Body() body: SyncCartDto) {
    const cartToken: string = body.cartToken ?? '';

    if (!cartToken) {
      throw new Error('Cart token must be provided for syncing.');
    }

    return await this.cartService.syncCart(userId, cartToken);
  }

  @Get(':userId')
  async getCart(@Param('userId') userId: string) {
    try {
      return await this.cartService.getCart(userId, null);
    } catch (error) {
      console.error('Error in getCart:', error);
      throw error;
    }
  }
}
