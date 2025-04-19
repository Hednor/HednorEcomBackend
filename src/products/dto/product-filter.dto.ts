// src/products/dto/product-filter.dto.ts
import { IsOptional, IsString } from 'class-validator';

export class ProductFilterDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  minPrice?: number;

  @IsOptional()
  maxPrice?: number;
}