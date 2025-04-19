// src/orders/dto/update-order.dto.ts
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateOrderDto {
  @IsNotEmpty()
  @IsString()
  status: string;
}