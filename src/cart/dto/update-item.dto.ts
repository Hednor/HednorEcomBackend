import { IsNotEmpty, IsString, IsNumber, Min } from 'class-validator';

export class UpdateItemDto {
  @IsString() @IsNotEmpty() userId: string;
  @IsString() @IsNotEmpty() productId: string;
  @IsNumber() @Min(1) quantity: number;
}
