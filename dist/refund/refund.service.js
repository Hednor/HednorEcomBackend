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
exports.RefundService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const refund_model_1 = require("./refund.model");
const mongoose_2 = require("mongoose");
let RefundService = class RefundService {
    refundModel;
    constructor(refundModel) {
        this.refundModel = refundModel;
    }
    async requestRefund(input) {
        const existing = await this.refundModel.findOne({ orderId: input.orderId });
        if (existing)
            throw new Error('Refund already requested for this order.');
        const refund = new this.refundModel(input);
        return refund.save();
    }
    async updateRefundStatus(input) {
        const { orderId, status } = input;
        const refund = await this.refundModel.findOneAndUpdate({ orderId }, { status }, { new: true });
        if (!refund) {
            throw new Error('Refund request not found');
        }
        return refund;
    }
    async getRefundsByUser(userId) {
        return this.refundModel.find({ userId });
    }
};
exports.RefundService = RefundService;
exports.RefundService = RefundService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(refund_model_1.Refund.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RefundService);
//# sourceMappingURL=refund.service.js.map