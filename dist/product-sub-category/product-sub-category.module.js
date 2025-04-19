"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSubCategoryModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const product_sub_category_schema_1 = require("./schemas/product-sub-category.schema");
const product_sub_category_service_1 = require("./product-sub-category.service");
const product_sub_category_resolver_1 = require("./product-sub-category.resolver");
let ProductSubCategoryModule = class ProductSubCategoryModule {
};
exports.ProductSubCategoryModule = ProductSubCategoryModule;
exports.ProductSubCategoryModule = ProductSubCategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: product_sub_category_schema_1.ProductSubCategory.name, schema: product_sub_category_schema_1.ProductSubCategorySchema },
            ]),
        ],
        providers: [product_sub_category_resolver_1.ProductSubCategoryResolver, product_sub_category_service_1.ProductSubCategoryService],
    })
], ProductSubCategoryModule);
//# sourceMappingURL=product-sub-category.module.js.map