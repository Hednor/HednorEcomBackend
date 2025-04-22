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
exports.RefundResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const refund_service_1 = require("./refund.service");
const create_refund_input_1 = require("./dto/create-refund.input");
const refund_model_1 = require("./refund.model");
const update_refund_status_input_1 = require("./dto/update-refund-status.input");
let RefundResolver = class RefundResolver {
    refundService;
    constructor(refundService) {
        this.refundService = refundService;
    }
    requestRefund(input) {
        return this.refundService.requestRefund(input);
    }
    async updateRefundStatus(input) {
        return this.refundService.updateRefundStatus(input);
    }
    refundsByUser(userId) {
        return this.refundService.getRefundsByUser(userId);
    }
};
exports.RefundResolver = RefundResolver;
__decorate([
    (0, graphql_1.Mutation)(() => refund_model_1.Refund),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_refund_input_1.CreateRefundInput]),
    __metadata("design:returntype", Promise)
], RefundResolver.prototype, "requestRefund", null);
__decorate([
    (0, graphql_1.Mutation)(() => refund_model_1.Refund),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_refund_status_input_1.UpdateRefundStatusInput]),
    __metadata("design:returntype", Promise)
], RefundResolver.prototype, "updateRefundStatus", null);
__decorate([
    (0, graphql_1.Query)(() => [refund_model_1.Refund]),
    __param(0, (0, graphql_1.Args)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RefundResolver.prototype, "refundsByUser", null);
exports.RefundResolver = RefundResolver = __decorate([
    (0, graphql_1.Resolver)(() => refund_model_1.Refund),
    __metadata("design:paramtypes", [refund_service_1.RefundService])
], RefundResolver);
//# sourceMappingURL=refund.resolver.js.map