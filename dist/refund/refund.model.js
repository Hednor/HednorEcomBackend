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
exports.RefundSchema = exports.Refund = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const graphql_1 = require("@nestjs/graphql");
let Refund = class Refund {
    _id;
    orderId;
    userId;
    reason;
    status;
    requestedAt;
};
exports.Refund = Refund;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], Refund.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Refund.prototype, "orderId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Refund.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Refund.prototype, "reason", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Refund.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now }),
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], Refund.prototype, "requestedAt", void 0);
exports.Refund = Refund = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true }),
    (0, graphql_1.ObjectType)()
], Refund);
exports.RefundSchema = mongoose_1.SchemaFactory.createForClass(Refund);
//# sourceMappingURL=refund.model.js.map