import { IsString, IsNumber, IsArray, ValidateNested ,Min} from 'class-validator';
import { Type } from 'class-transformer';

class SyncItem {
  @IsString()
  cartId: string;

  @IsString()
  productId: string;

  @IsNumber()
  quantity: number;
}

export class SyncCartDto {
  @IsString()
  userId: string;

  @Type(() => Number)
    @IsNumber()
    @Min(1)
    order: number;

  
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SyncItem)
  anonymousItems: SyncItem[];
}
