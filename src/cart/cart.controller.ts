import { Body, Controller, Post, Param, Put, Delete , Get } from '@nestjs/common';
import { CartService } from './cart.service';
import { AddItemDto } from './dto/add-item.dto';
import { RemoveItemDto } from './dto/remove-item.dto';
import { SyncCartDto } from './dto/sync-cart.dto';
import { BadRequestException } from '@nestjs/common';

@Controller('cart') 
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('add')
  addItem(@Body() addItemDto: AddItemDto) {
    return this.cartService.addItem(addItemDto.userId, addItemDto.productId, addItemDto.quantity);
  }

  @Put('update')
  async updateItem(@Body() addItemDto: AddItemDto) {
    if (!addItemDto.userId || !addItemDto.productId || addItemDto.quantity <= 0) {
      throw new BadRequestException('Invalid data provided.');
    }
    return this.cartService.updateItem(addItemDto.userId, addItemDto.productId, addItemDto.quantity);
  }

  @Delete('remove/:userId/:productId')
removeItem(@Param('userId') userId: string, @Param('productId') productId: string) {
    return this.cartService.removeItem(userId, productId);
}




  @Post('sync')
  syncCart(@Body() syncCartDto: SyncCartDto) {
    return this.cartService.syncCart(syncCartDto.userId, syncCartDto.anonymousItems);
  }
  @Get()
findAll() {
  return 'Cart products';
}
   }
