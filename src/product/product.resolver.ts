// src/product/product.resolver.ts
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly service: ProductService) {}

  @Mutation(() => Product)
  createProduct(@Args('input') input: CreateProductInput) {
    return this.service.create(input);
  }

  @Query(() => [Product])
  findAllProducts() {
    return this.service.findAll();
  }

  @Query(() => Product)
  findProduct(@Args('id') id: string) {
    return this.service.findOne(id);
  }

  @Mutation(() => Product)
  updateProduct(@Args('input') input: UpdateProductInput) {
  return this.service.update(input.id, input);
  }

  @Mutation(() => Product)
  removeProduct(@Args('id') id: string) {
  return this.service.remove(id);
  }
}
