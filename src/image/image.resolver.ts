import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ImageService } from './image.service';
import { Image } from './schemas/image.schema';
import { CreateImageInput } from './dto/create-image.input';
import { UpdateImageInput } from './dto/update-image.input';

@Resolver(() => Image)
export class ImageResolver {
  constructor(private readonly service: ImageService) {}

  @Mutation(() => Image)
  createImage(@Args('input') input: CreateImageInput) {
    return this.service.create(input);
  }

  @Query(() => [Image])
  findAllImages() {
    return this.service.findAll();
  }

  @Query(() => Image)
  findImage(@Args('id') id: string) {
    return this.service.findOne(id);
  }

  @Mutation(() => Image)
  updateImage(@Args('input') input: UpdateImageInput) {
    return this.service.update(input.id, input);
  }

  @Mutation(() => Image)
  removeImage(@Args('id') id: string) {
    return this.service.remove(id);
  }
}
