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
exports.CartController = void 0;
const common_1 = require("@nestjs/common");
const cart_service_1 = require("./cart.service");
const add_item_dto_1 = require("./dto/add-item.dto");
const remove_item_dto_1 = require("./dto/remove-item.dto");
const sync_cart_dto_1 = require("./dto/sync-cart.dto");
let CartController = class CartController {
    cartService;
    constructor(cartService) {
        this.cartService = cartService;
    }
    async addToCart(body) {
        try {
            const cartToken = body.cartToken ?? null;
            const userId = body.userId ?? null;
            if (userId) {
                return await this.cartService.addItem(userId, cartToken, body.productId, body.quantity);
            }
            else if (cartToken) {
                return await this.cartService.addItemAnonymous(cartToken, body.productId, body.quantity);
            }
            else {
                throw new Error('Either userId or cartToken must be provided.');
            }
        }
        catch (error) {
            console.error('Error in addToCart:', error);
            throw error;
        }
    }
    async updateItem(body) {
        const cartToken = body.cartToken ?? null;
        const userId = body.userId ?? null;
        if (!userId && !cartToken) {
            throw new Error('Either userId or cartToken must be provided.');
        }
        return await this.cartService.updateItem(userId, cartToken, body.productId, body.quantity);
    }
    async removeItem(userId, productId, body) {
        const cartToken = body.cartToken ?? null;
        return await this.cartService.removeItem(userId || null, cartToken, productId);
    }
    async syncCart(userId, body) {
        const cartToken = body.cartToken ?? '';
        if (!cartToken) {
            throw new Error('Cart token must be provided for syncing.');
        }
        return await this.cartService.syncCart(userId, cartToken);
    }
    async getCart(userId) {
        try {
            return await this.cartService.getCart(userId, null);
        }
        catch (error) {
            console.error('Error in getCart:', error);
            throw error;
        }
    }
};
exports.CartController = CartController;
__decorate([
    (0, common_1.Post)('add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_item_dto_1.AddItemDto]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "addToCart", null);
__decorate([
    (0, common_1.Put)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_item_dto_1.AddItemDto]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "updateItem", null);
__decorate([
    (0, common_1.Delete)('remove/:userId/:productId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('productId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, remove_item_dto_1.RemoveItemDto]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "removeItem", null);
__decorate([
    (0, common_1.Put)('sync/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, sync_cart_dto_1.SyncCartDto]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "syncCart", null);
__decorate([
    (0, common_1.Get)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "getCart", null);
exports.CartController = CartController = __decorate([
    (0, common_1.Controller)('cart'),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartController);
//# sourceMappingURL=cart.controller.js.map