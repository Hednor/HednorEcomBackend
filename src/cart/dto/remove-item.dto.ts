import { IsNotEmpty, IsString } from 'class-validator';

export class RemoveItemDto {
  cartToken?: string; 
  productId: string; 
}
