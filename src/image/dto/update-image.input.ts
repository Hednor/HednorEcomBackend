import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateImageInput } from './create-image.input';

@InputType()
export class UpdateImageInput extends PartialType(CreateImageInput) {
  @Field()
  id: string;
}
