import { Test, TestingModule } from '@nestjs/testing';
import { ProductSubCategoryResolver } from './product-sub-category.resolver';

describe('ProductSubCategoryResolver', () => {
  let resolver: ProductSubCategoryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductSubCategoryResolver],
    }).compile();

    resolver = module.get<ProductSubCategoryResolver>(ProductSubCategoryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
