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
exports.DiscountController = void 0;
const common_1 = require("@nestjs/common");
const discount_service_1 = require("./discount.service");
const create_discount_dto_1 = require("./dto/create-discount.dto");
const update_discount_dto_1 = require("./dto/update-discount.dto");
let DiscountController = class DiscountController {
    discountService;
    constructor(discountService) {
        this.discountService = discountService;
    }
    create(createDiscountDto) {
        return this.discountService.create(createDiscountDto);
    }
    findAll() {
        return this.discountService.findAll();
    }
    findOne(id) {
        return this.discountService.findOne(id);
    }
    update(id, updateDiscountDto) {
        return this.discountService.update(id, updateDiscountDto);
    }
    remove(id) {
        return this.discountService.remove(id);
    }
};
exports.DiscountController = DiscountController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_discount_dto_1.CreateDiscountDto]),
    __metadata("design:returntype", void 0)
], DiscountController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DiscountController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DiscountController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_discount_dto_1.UpdateDiscountDto]),
    __metadata("design:returntype", void 0)
], DiscountController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DiscountController.prototype, "remove", null);
exports.DiscountController = DiscountController = __decorate([
    (0, common_1.Controller)('discount'),
    __metadata("design:paramtypes", [discount_service_1.DiscountService])
], DiscountController);
//# sourceMappingURL=discount.controller.js.map