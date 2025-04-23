import { IsOptional, IsString, IsArray } from 'class-validator';

export class SyncCartDto {
  @IsOptional()
  @IsString()
  cartToken: string | null = null;

  @IsArray()
  items: any[];
}
