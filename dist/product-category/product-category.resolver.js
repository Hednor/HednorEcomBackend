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
exports.ProductCategoryResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const product_category_service_1 = require("./product-category.service");
const product_category_entity_1 = require("./entities/product-category.entity");
const create_product_category_input_1 = require("./dto/create-product-category.input");
const update_product_category_input_1 = require("./dto/update-product-category.input");
let ProductCategoryResolver = class ProductCategoryResolver {
    service;
    constructor(service) {
        this.service = service;
    }
    createProductCategory(input) {
        return this.service.create(input);
    }
    findAllProductCategories() {
        return this.service.findAll();
    }
    findProductCategory(id) {
        return this.service.findOne(id);
    }
    updateProductCategory(input) {
        return this.service.update(input.id, input);
    }
    removeProductCategory(id) {
        return this.service.remove(id);
    }
};
exports.ProductCategoryResolver = ProductCategoryResolver;
__decorate([
    (0, graphql_1.Mutation)(() => product_category_entity_1.ProductCategory),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_category_input_1.CreateProductCategoryInput]),
    __metadata("design:returntype", void 0)
], ProductCategoryResolver.prototype, "createProductCategory", null);
__decorate([
    (0, graphql_1.Query)(() => [product_category_entity_1.ProductCategory]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductCategoryResolver.prototype, "findAllProductCategories", null);
__decorate([
    (0, graphql_1.Query)(() => product_category_entity_1.ProductCategory),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductCategoryResolver.prototype, "findProductCategory", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_category_entity_1.ProductCategory),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_product_category_input_1.UpdateProductCategoryInput]),
    __metadata("design:returntype", void 0)
], ProductCategoryResolver.prototype, "updateProductCategory", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_category_entity_1.ProductCategory),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductCategoryResolver.prototype, "removeProductCategory", null);
exports.ProductCategoryResolver = ProductCategoryResolver = __decorate([
    (0, graphql_1.Resolver)(() => product_category_entity_1.ProductCategory),
    __metadata("design:paramtypes", [product_category_service_1.ProductCategoryService])
], ProductCategoryResolver);
//# sourceMappingURL=product-category.resolver.js.map