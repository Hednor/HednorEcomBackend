import { IsString, IsNumber, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class SyncItem {
  @IsString()
  productId: string;

  @IsNumber()
  quantity: number;
}

export class SyncCartDto {
  @IsString()
  userId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SyncItem)
  anonymousItems: SyncItem[];
}
