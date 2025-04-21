// src/product/product.resolver.ts
import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { InjectModel } from '@nestjs/mongoose';
import { ProductCategory, ProductCategoryDocument } from 'src/product-category/schemas/product-category.schema';
import { ProductSubCategory, ProductSubCategoryDocument } from 'src/product-sub-category/schemas/product-sub-category.schema';
import { Model } from 'mongoose';
import { ProductDocument } from './schemas/product.schema';

@Resolver(() => Product)
export class ProductResolver {
  // constructor(private readonly service: ProductService) {}
  constructor(
    private readonly productService: ProductService,
    @InjectModel(ProductCategory.name) private categoryModel: Model<ProductCategoryDocument>,
    @InjectModel(ProductSubCategory.name) private subCategoryModel: Model<ProductSubCategoryDocument>,
  ) {}
  
  

  @Mutation(() => Product)
  createProduct(@Args('input') input: CreateProductInput) {
    return this.productService.create(input);
  }

  @Query(() => [Product])
  findAllProducts() {
    return this.productService.findAll();
  }

  @Query(() => Product)
  findProduct(@Args('id') id: string) {
    return this.productService.findOne(id);
  }

  @Mutation(() => Product)
  updateProduct(@Args('input') input: UpdateProductInput) {
  return this.productService.update(input.id, input);
  }

  @Mutation(() => Product)
  removeProduct(@Args('id') id: string) {
  return this.productService.remove(id);
  }

  @ResolveField(() => ProductCategory)
async category(@Parent() product: ProductDocument) {
  return this.categoryModel.findById(product.categoryId);
}

@ResolveField(() => ProductSubCategory)
async subCategory(@Parent() product: ProductDocument) {
  return this.subCategoryModel.findById(product.subCategoryId);
}

}
