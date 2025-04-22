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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const deduct_stock_input_1 = require("../../inventory/dto/deduct-stock.input");
let CreateOrderInput = class CreateOrderInput {
    orderId;
    status;
    totalAmount;
    coupanId;
    cartId;
    paymentId;
    userId;
    address;
    cartItems;
};
exports.CreateOrderInput = CreateOrderInput;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateOrderInput.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateOrderInput.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateOrderInput.prototype, "totalAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], CreateOrderInput.prototype, "coupanId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateOrderInput.prototype, "cartId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateOrderInput.prototype, "paymentId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateOrderInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateOrderInput.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => [deduct_stock_input_1.DeductStockInput]),
    __metadata("design:type", Array)
], CreateOrderInput.prototype, "cartItems", void 0);
exports.CreateOrderInput = CreateOrderInput = __decorate([
    (0, graphql_1.InputType)()
], CreateOrderInput);
//# sourceMappingURL=create-order.input.js.map