import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateImageInput {
  @Field()
  url: string;

  @Field()
  color: string;

  @Field(() => [String])
  images: string[];

  @Field()
  price: number;

  @Field()
  productId: string;
}
