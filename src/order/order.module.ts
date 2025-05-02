// src/order/order.module.ts
import { Module } from '@nestjs/common';
import { OrderResolver } from './order.resolver';
import { OrderService } from './order.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './schemas/order.schema';
import { InventoryModule } from 'src/inventory/inventory.module';
import { EmailModule } from 'src/email/email.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    InventoryModule,
    EmailModule,
  ],
  
  providers: [OrderResolver, OrderService],
  exports: [MongooseModule], // 👈 VERY IMPORTANT
})
export class OrderModule {}
