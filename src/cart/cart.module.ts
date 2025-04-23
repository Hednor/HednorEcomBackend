import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Cart, CartSchema } from './schemas/cart.schema';
import { ProductModule } from '../product/product.module'; 
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { CartTokenSchema, CartToken } from './schemas/cart-token.schema';


@Module({
  imports: [
    ProductModule, 
    MongooseModule.forFeature([
      { name: Cart.name, schema: CartSchema },
      { name: CartToken.name, schema: CartTokenSchema }, 
    ]),
  ],
  controllers: [CartController],
  providers: [CartService], 
})
export class CartModule {}
