import { Test, TestingModule } from '@nestjs/testing';
import { ProductCategoryResolver } from './product-category.resolver';

describe('ProductCategoryResolver', () => {
  let resolver: ProductCategoryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductCategoryResolver],
    }).compile();

    resolver = module.get<ProductCategoryResolver>(ProductCategoryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
