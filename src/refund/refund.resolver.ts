// src/refund/refund.resolver.ts
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { RefundService } from './refund.service';
import { CreateRefundInput } from './dto/create-refund.input';
import { Refund } from './refund.model';
import { UpdateRefundStatusInput } from './dto/update-refund-status.input';

@Resolver(() => Refund)
export class RefundResolver {
  constructor(private refundService: RefundService) {}

  @Mutation(() => Refund)
  requestRefund(@Args('input') input: CreateRefundInput): Promise<Refund> {
    return this.refundService.requestRefund(input);
  }

  @Mutation(() => Refund)
async updateRefundStatus(
  @Args('input') input: UpdateRefundStatusInput,
): Promise<Refund> {
  return this.refundService.updateRefundStatus(input);
}

  @Query(() => [Refund])
  refundsByUser(@Args('userId') userId: string): Promise<Refund[]> {
    return this.refundService.getRefundsByUser(userId);
  }
}
