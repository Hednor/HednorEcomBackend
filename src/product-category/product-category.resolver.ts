// src/product-category/product-category.resolver.ts
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductCategoryService } from './product-category.service';
// import { ProductCategory } from './entities/product-category.entity';
import { ProductCategory } from './entities/product-category.entity';
import { CreateProductCategoryInput } from './dto/create-product-category.input';
import { UpdateProductCategoryInput } from './dto/update-product-category.input';

@Resolver(() => ProductCategory)
export class ProductCategoryResolver {
  constructor(private readonly service: ProductCategoryService) {}

  @Mutation(() => ProductCategory)
  createProductCategory(@Args('input') input: CreateProductCategoryInput) {
    return this.service.create(input);
  }

  @Query(() => [ProductCategory])
  findAllProductCategories() {
    return this.service.findAll();
  }

  @Query(() => ProductCategory)
  findProductCategory(@Args('id') id: string) {
    return this.service.findOne(id);
  }

  @Mutation(() => ProductCategory)
  updateProductCategory(@Args('input') input: UpdateProductCategoryInput) {
    return this.service.update(input.id, input);
  }

  @Mutation(() => ProductCategory)
  removeProductCategory(@Args('id') id: string) {
    return this.service.remove(id);
  }
}
