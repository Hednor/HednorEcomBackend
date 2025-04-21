"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const product_service_1 = require("./product.service");
const product_entity_1 = require("./entities/product.entity");
const create_product_input_1 = require("./dto/create-product.input");
const update_product_input_1 = require("./dto/update-product.input");
const mongoose_1 = require("@nestjs/mongoose");
const product_category_schema_1 = require("../product-category/schemas/product-category.schema");
const product_sub_category_schema_1 = require("../product-sub-category/schemas/product-sub-category.schema");
const mongoose_2 = require("mongoose");
let ProductResolver = class ProductResolver {
    productService;
    categoryModel;
    subCategoryModel;
    constructor(productService, categoryModel, subCategoryModel) {
        this.productService = productService;
        this.categoryModel = categoryModel;
        this.subCategoryModel = subCategoryModel;
    }
    createProduct(input) {
        return this.productService.create(input);
    }
    findAllProducts() {
        return this.productService.findAll();
    }
    findProduct(id) {
        return this.productService.findOne(id);
    }
    updateProduct(input) {
        return this.productService.update(input.id, input);
    }
    removeProduct(id) {
        return this.productService.remove(id);
    }
    async category(product) {
        return this.categoryModel.findById(product.categoryId);
    }
    async subCategory(product) {
        return this.subCategoryModel.findById(product.subCategoryId);
    }
};
exports.ProductResolver = ProductResolver;
__decorate([
    (0, graphql_1.Mutation)(() => product_entity_1.Product),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_input_1.CreateProductInput]),
    __metadata("design:returntype", void 0)
], ProductResolver.prototype, "createProduct", null);
__decorate([
    (0, graphql_1.Query)(() => [product_entity_1.Product]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductResolver.prototype, "findAllProducts", null);
__decorate([
    (0, graphql_1.Query)(() => product_entity_1.Product),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductResolver.prototype, "findProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_entity_1.Product),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_product_input_1.UpdateProductInput]),
    __metadata("design:returntype", void 0)
], ProductResolver.prototype, "updateProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_entity_1.Product),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductResolver.prototype, "removeProduct", null);
__decorate([
    (0, graphql_1.ResolveField)(() => product_category_schema_1.ProductCategory),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "category", null);
__decorate([
    (0, graphql_1.ResolveField)(() => product_sub_category_schema_1.ProductSubCategory),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "subCategory", null);
exports.ProductResolver = ProductResolver = __decorate([
    (0, graphql_1.Resolver)(() => product_entity_1.Product),
    __param(1, (0, mongoose_1.InjectModel)(product_category_schema_1.ProductCategory.name)),
    __param(2, (0, mongoose_1.InjectModel)(product_sub_category_schema_1.ProductSubCategory.name)),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        mongoose_2.Model,
        mongoose_2.Model])
], ProductResolver);
//# sourceMappingURL=product.resolver.js.map