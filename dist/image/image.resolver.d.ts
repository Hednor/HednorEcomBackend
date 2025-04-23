import { ImageService } from './image.service';
import { Image } from './schemas/image.schema';
import { CreateImageInput } from './dto/create-image.input';
import { UpdateImageInput } from './dto/update-image.input';
export declare class ImageResolver {
    private readonly service;
    constructor(service: ImageService);
    createImage(input: CreateImageInput): Promise<Image>;
    findAllImages(): Promise<Image[]>;
    findImage(id: string): Promise<Image>;
    updateImage(input: UpdateImageInput): Promise<Image>;
    removeImage(id: string): Promise<Image>;
}
