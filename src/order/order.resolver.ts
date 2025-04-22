// src/order/order.resolver.ts
import { Resolver, Mutation, Args, Query, Context } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { OrderType } from './dto/order.type';

import { Order } from './schemas/order.schema';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderDeliveryInput } from './dto/update-order-delivery.input';

@Resolver(() => OrderType)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  

  @Mutation(() => OrderType)
createOrder(@Args('input') input: CreateOrderInput): Promise<Order> {
  return this.orderService.createOrder(input);
}

@Mutation(() => OrderType)
async updateOrderDelivery(@Args('input') input: UpdateOrderDeliveryInput,): Promise<Order> {
  return this.orderService.updateOrderDelivery(input);
}



// @Mutation(() => OrderType)
// cancelOrder(@Args('orderId') orderId: string, @Context() context) {
//   const userId = context.req.user._id;
//   return this.orderService.cancelOrder(orderId, userId);
// }

@Mutation(() => OrderType)
cancelOrder(
  @Args('orderId') orderId: string,
  @Args('userId') userId: string, // 👈 ab userId input se lenge
) {
  return this.orderService.cancelOrder(orderId, userId);
}




@Query(() => String)
  testOrderQuery(): string {
    return 'Order resolver is working!';
  }


}
