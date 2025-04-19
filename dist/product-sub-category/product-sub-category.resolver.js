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
exports.ProductSubCategoryResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const product_sub_category_service_1 = require("./product-sub-category.service");
const product_sub_category_entity_1 = require("./entities/product-sub-category.entity");
const create_product_sub_category_input_1 = require("./dto/create-product-sub-category.input");
const update_product_sub_category_input_1 = require("./dto/update-product-sub-category.input");
let ProductSubCategoryResolver = class ProductSubCategoryResolver {
    service;
    constructor(service) {
        this.service = service;
    }
    createProductSubCategory(input) {
        return this.service.create(input);
    }
    findAllProductSubCategories() {
        return this.service.findAll();
    }
    findProductSubCategory(id) {
        return this.service.findOne(id);
    }
    updateProductSubCategory(input) {
        return this.service.update(input.id, input);
    }
    removeProductSubCategory(id) {
        return this.service.remove(id);
    }
};
exports.ProductSubCategoryResolver = ProductSubCategoryResolver;
__decorate([
    (0, graphql_1.Mutation)(() => product_sub_category_entity_1.ProductSubCategory),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_sub_category_input_1.CreateProductSubCategoryInput]),
    __metadata("design:returntype", void 0)
], ProductSubCategoryResolver.prototype, "createProductSubCategory", null);
__decorate([
    (0, graphql_1.Query)(() => [product_sub_category_entity_1.ProductSubCategory]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductSubCategoryResolver.prototype, "findAllProductSubCategories", null);
__decorate([
    (0, graphql_1.Query)(() => product_sub_category_entity_1.ProductSubCategory),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductSubCategoryResolver.prototype, "findProductSubCategory", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_sub_category_entity_1.ProductSubCategory),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_product_sub_category_input_1.UpdateProductSubCategoryInput]),
    __metadata("design:returntype", void 0)
], ProductSubCategoryResolver.prototype, "updateProductSubCategory", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_sub_category_entity_1.ProductSubCategory),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductSubCategoryResolver.prototype, "removeProductSubCategory", null);
exports.ProductSubCategoryResolver = ProductSubCategoryResolver = __decorate([
    (0, graphql_1.Resolver)(() => product_sub_category_entity_1.ProductSubCategory),
    __metadata("design:paramtypes", [product_sub_category_service_1.ProductSubCategoryService])
], ProductSubCategoryResolver);
//# sourceMappingURL=product-sub-category.resolver.js.map