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
exports.OrderResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const order_service_1 = require("./order.service");
const order_type_1 = require("./dto/order.type");
const create_order_input_1 = require("./dto/create-order.input");
const update_order_delivery_input_1 = require("./dto/update-order-delivery.input");
let OrderResolver = class OrderResolver {
    orderService;
    constructor(orderService) {
        this.orderService = orderService;
    }
    createOrder(input) {
        return this.orderService.createOrder(input);
    }
    async updateOrderDelivery(input) {
        return this.orderService.updateOrderDelivery(input);
    }
    cancelOrder(orderId, userId) {
        return this.orderService.cancelOrder(orderId, userId);
    }
    testOrderQuery() {
        return 'Order resolver is working!';
    }
};
exports.OrderResolver = OrderResolver;
__decorate([
    (0, graphql_1.Mutation)(() => order_type_1.OrderType),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_input_1.CreateOrderInput]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "createOrder", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_type_1.OrderType),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_order_delivery_input_1.UpdateOrderDeliveryInput]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "updateOrderDelivery", null);
__decorate([
    (0, graphql_1.Mutation)(() => order_type_1.OrderType),
    __param(0, (0, graphql_1.Args)('orderId')),
    __param(1, (0, graphql_1.Args)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], OrderResolver.prototype, "cancelOrder", null);
__decorate([
    (0, graphql_1.Query)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], OrderResolver.prototype, "testOrderQuery", null);
exports.OrderResolver = OrderResolver = __decorate([
    (0, graphql_1.Resolver)(() => order_type_1.OrderType),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderResolver);
//# sourceMappingURL=order.resolver.js.map