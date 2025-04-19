"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategoryModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const product_category_schema_1 = require("./schemas/product-category.schema");
const product_category_service_1 = require("./product-category.service");
const product_category_resolver_1 = require("./product-category.resolver");
let ProductCategoryModule = class ProductCategoryModule {
};
exports.ProductCategoryModule = ProductCategoryModule;
exports.ProductCategoryModule = ProductCategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: product_category_schema_1.ProductCategory.name, schema: product_category_schema_1.ProductCategorySchema },
            ]),
        ],
        providers: [product_category_resolver_1.ProductCategoryResolver, product_category_service_1.ProductCategoryService],
    })
], ProductCategoryModule);
//# sourceMappingURL=product-category.module.js.map