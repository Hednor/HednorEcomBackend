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
exports.OrderType = void 0;
const graphql_1 = require("@nestjs/graphql");
const order_item_type_1 = require("./order-item.type");
let OrderType = class OrderType {
    _id;
    orderId;
    totalAmount;
    coupanIds;
    status;
    cartId;
    paymentId;
    userId;
    createdAt;
    updatedAt;
    address;
    tracking;
    orderStatus;
    items;
};
exports.OrderType = OrderType;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], OrderType.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], OrderType.prototype, "orderId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], OrderType.prototype, "totalAmount", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], OrderType.prototype, "coupanIds", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], OrderType.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], OrderType.prototype, "cartId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], OrderType.prototype, "paymentId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], OrderType.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], OrderType.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], OrderType.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], OrderType.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], OrderType.prototype, "tracking", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], OrderType.prototype, "orderStatus", void 0);
__decorate([
    (0, graphql_1.Field)(() => [order_item_type_1.OrderItemType]),
    __metadata("design:type", Array)
], OrderType.prototype, "items", void 0);
exports.OrderType = OrderType = __decorate([
    (0, graphql_1.ObjectType)()
], OrderType);
//# sourceMappingURL=order.type.js.map