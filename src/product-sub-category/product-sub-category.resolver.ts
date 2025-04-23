// src/product-sub-category/product-sub-category.resolver.ts
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductSubCategoryService } from './product-sub-category.service';
import { ProductSubCategory } from './entities/product-sub-category.entity';
import { CreateProductSubCategoryInput } from './dto/create-product-sub-category.input';
import { UpdateProductSubCategoryInput } from './dto/update-product-sub-category.input';

@Resolver(() => ProductSubCategory)
export class ProductSubCategoryResolver {
  constructor(private readonly service: ProductSubCategoryService) {}

  @Mutation(() => ProductSubCategory)
  createProductSubCategory(@Args('input') input: CreateProductSubCategoryInput) {
    return this.service.create(input);
  }

  @Query(() => [ProductSubCategory])
  findAllProductSubCategories() {
    return this.service.findAll();
  }

  @Query(() => ProductSubCategory)
  findProductSubCategory(@Args('id') id: string) {
    return this.service.findOne(id);
  }

  @Mutation(() => ProductSubCategory)
  updateProductSubCategory(@Args('input') input: UpdateProductSubCategoryInput) {
  return this.service.update(input.id, input);
}

  @Mutation(() => ProductSubCategory)
  removeProductSubCategory(@Args('id') id: string) {
  return this.service.remove(id);
}
}
