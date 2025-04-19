// src/orders/dto/order-filter.dto.ts
import { IsOptional, IsString } from 'class-validator';

export class OrderFilterDto {
  @IsOptional()
  @IsString()
  userId?: string;

  @IsOptional()
  @IsString()
  status?: string;
}