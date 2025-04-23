import { IsString, IsNumber, IsOptional } from 'class-validator';

export class AddItemDto {
  @IsString()
  @IsOptional()  
  userId: string | null;

  @IsString()
  @IsOptional()  // cartToken can be optional if it's for a logged-in user
  cartToken: string | null;

  @IsString()
  productId: string; 

  @IsNumber()
  quantity: number; 
}

