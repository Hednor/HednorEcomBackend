

import { IsNotEmpty, IsString, IsNumber, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateItemDto {
  @IsString()
  @IsNotEmpty()
  CartId: string;

  @IsString()
  @IsNotEmpty()
  productId: string;


  @Type(() => Number)
  @IsNumber()
  @Min(1)
  quantity: number;
  
  @IsString()
  @IsNotEmpty()
  userId: string;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  order: number;

}



