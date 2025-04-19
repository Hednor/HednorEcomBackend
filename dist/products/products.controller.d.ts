import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductFilterDto } from './dto/product-filter.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): Promise<import("./schemas/product.schema").Product>;
    findAll(filter: ProductFilterDto): Promise<import("./schemas/product.schema").Product[]>;
    findOne(id: string): Promise<import("./schemas/product.schema").Product | null>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<import("./schemas/product.schema").Product | null>;
    remove(id: string): Promise<import("./schemas/product.schema").Product | null>;
    getCategories(): Promise<import("./schemas/category.schema").Category[]>;
    getFeaturedProducts(): Promise<import("./schemas/product.schema").Product[]>;
}
