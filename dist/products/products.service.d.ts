import { Model } from 'mongoose';
import { Product } from './schemas/product.schema';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Category } from './schemas/category.schema';
export declare class ProductsService {
    private productModel;
    private categoryModel;
    constructor(productModel: Model<Product>, categoryModel: Model<Category>);
    create(createProductDto: CreateProductDto): Promise<Product>;
    findAll(filter?: any): Promise<Product[]>;
    findOne(id: string): Promise<Product | null>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<Product | null>;
    remove(id: string): Promise<Product | null>;
    getFeaturedProducts(): Promise<Product[]>;
    getCategories(): Promise<Category[]>;
}
