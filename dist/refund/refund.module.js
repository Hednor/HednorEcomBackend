"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefundModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const refund_model_1 = require("./refund.model");
const refund_resolver_1 = require("./refund.resolver");
const refund_service_1 = require("./refund.service");
const order_module_1 = require("../order/order.module");
const email_module_1 = require("../email/email.module");
let RefundModule = class RefundModule {
};
exports.RefundModule = RefundModule;
exports.RefundModule = RefundModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: refund_model_1.Refund.name, schema: refund_model_1.RefundSchema }]),
            order_module_1.OrderModule,
            email_module_1.EmailModule,
        ],
        providers: [refund_resolver_1.RefundResolver, refund_service_1.RefundService],
    })
], RefundModule);
//# sourceMappingURL=refund.module.js.map