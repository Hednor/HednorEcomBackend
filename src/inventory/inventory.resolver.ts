// src/inventory/inventory.resolver.ts

import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { InventoryService } from './inventory.service';
import { DeductStockInput } from './dto/deduct-stock.input';

@Resolver()
export class InventoryResolver {
  constructor(private readonly inventoryService: InventoryService) {}

  @Mutation(() => String)
  async deductStock(
    @Args({ name: 'items', type: () => [DeductStockInput] }) items: DeductStockInput[],
  ): Promise<string> {
    await this.inventoryService.deductStock(items);
    return 'Stock successfully deducted';
  }
}
