import { Model } from 'mongoose';
import { Image, ImageDocument } from './schemas/image.schema';
import { CreateImageInput } from './dto/create-image.input';
import { UpdateImageInput } from './dto/update-image.input';
export declare class ImageService {
    private imageModel;
    constructor(imageModel: Model<ImageDocument>);
    create(input: CreateImageInput): Promise<Image>;
    findAll(): Promise<Image[]>;
    findOne(id: string): Promise<Image>;
    update(id: string, input: UpdateImageInput): Promise<Image>;
    remove(id: string): Promise<Image>;
}
