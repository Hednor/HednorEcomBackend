import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InventoryService } from './inventory.service';
import { InventoryResolver } from './inventory.resolver';
import { Inventory, InventorySchema } from './inventory.model';
import { product, ProductSchema } from '../product/product.model'; // ✅ Product model import

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Inventory.name, schema: InventorySchema },
      { name: product.name, schema: ProductSchema }, // ✅ Product model register
    ]),
  ],
  providers: [InventoryService, InventoryResolver],
  exports: [InventoryService],
})
export class InventoryModule {}
