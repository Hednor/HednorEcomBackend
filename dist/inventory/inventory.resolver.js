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
exports.InventoryResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const inventory_service_1 = require("./inventory.service");
const deduct_stock_input_1 = require("./dto/deduct-stock.input");
let InventoryResolver = class InventoryResolver {
    inventoryService;
    constructor(inventoryService) {
        this.inventoryService = inventoryService;
    }
    async deductStock(items) {
        await this.inventoryService.deductStock(items);
        return 'Stock successfully deducted';
    }
};
exports.InventoryResolver = InventoryResolver;
__decorate([
    (0, graphql_1.Mutation)(() => String),
    __param(0, (0, graphql_1.Args)({ name: 'items', type: () => [deduct_stock_input_1.DeductStockInput] })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], InventoryResolver.prototype, "deductStock", null);
exports.InventoryResolver = InventoryResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [inventory_service_1.InventoryService])
], InventoryResolver);
//# sourceMappingURL=inventory.resolver.js.map