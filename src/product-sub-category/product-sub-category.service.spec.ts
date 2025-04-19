import { Test, TestingModule } from '@nestjs/testing';
import { ProductSubCategoryService } from './product-sub-category.service';

describe('ProductSubCategoryService', () => {
  let service: ProductSubCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductSubCategoryService],
    }).compile();

    service = module.get<ProductSubCategoryService>(ProductSubCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
