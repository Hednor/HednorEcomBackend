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
const order_schema_1 = require("../order/schemas/order.schema");
const email_service_1 = require("../email/email.service");
let RefundService = class RefundService {
    refundModel;
    orderModel;
    emailService;
    constructor(refundModel, orderModel, emailService) {
        this.refundModel = refundModel;
        this.orderModel = orderModel;
        this.emailService = emailService;
    }
    async requestRefund(input) {
        const existing = await this.refundModel.findOne({ orderId: input.orderId });
        if (existing)
            throw new Error('Refund already requested for this order.');
        const refund = new this.refundModel(input);
        const savedRefund = await refund.save();
        const order = await this.orderModel.findOne({ orderId: input.orderId });
        let customerEmail = 'imranahmad9847@gmail.com';
        try {
            const parsedAddress = JSON.parse(order?.address || '{}');
            customerEmail = parsedAddress.email || customerEmail;
        }
        catch (err) {
            console.warn('Address parsing failed, using fallback email');
        }
        await this.emailService.sendEmail({
            to: customerEmail,
            subject: 'Refund Request Received',
            text: `We have received your refund request for Order ID: ${input.orderId}. Our team will review it shortly.`,
            html: `
        <h2>Refund Request Submitted</h2>
        <p><strong>Order ID:</strong> ${input.orderId}</p>
        <p>Your refund request has been received successfully.</p>
        <p>We’ll notify you once it's reviewed and processed.</p>
        <p>Thank you for your patience.</p>
      `,
        });
        return savedRefund;
    }
    async updateRefundStatus(input) {
        const { orderId, status } = input;
        const refund = await this.refundModel.findOneAndUpdate({ orderId }, { status }, { new: true });
        if (!refund) {
            throw new Error('Refund request not found');
        }
        const order = await this.orderModel.findOne({ orderId });
        const customerEmail = 'imranahmad9847@gmail.com';
        await this.emailService.sendEmail({
            to: customerEmail,
            subject: `Refund Status Updated: ${status}`,
            text: `Your refund request for Order ID: ${orderId} is now marked as "${status}".`,
            html: `
        <h2>Refund Status Updated</h2>
        <p><strong>Order ID:</strong> ${orderId}</p>
        <p><strong>Updated Status:</strong> ${status}</p>
        <p>We’ll keep you informed about further actions.</p>
        <p>Thanks for your patience!</p>
      `,
        });
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
    __param(1, (0, mongoose_1.InjectModel)(order_schema_1.Order.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        email_service_1.EmailService])
], RefundService);
//# sourceMappingURL=refund.service.js.map