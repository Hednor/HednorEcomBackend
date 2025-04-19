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
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const mongoose_3 = require("mongoose");
const cart_schema_1 = require("./schemas/cart.schema");
let CartService = class CartService {
    cartModel;
    constructor(cartModel) {
        this.cartModel = cartModel;
    }
    async getCart(userId) {
        let cart = await this.cartModel.findOne({ userId }).exec();
        if (!cart) {
            cart = new this.cartModel({ userId, cartId: new Date().getTime().toString(), products: [] });
            return await cart.save();
        }
        return cart;
    }
    async addItem(userId, productId, quantity) {
        const cart = await this.getCart(userId);
        const itemIndex = cart.products.findIndex(item => item.product.toString() === productId);
        if (itemIndex >= 0) {
            cart.products[itemIndex].quantity += quantity;
        }
        else {
            cart.products.push({ product: new mongoose_3.Types.ObjectId(productId), quantity });
        }
        return await cart.save();
    }
    async updateItem(userId, productId, quantity) {
        const cart = await this.cartModel.findOne({ userId }).exec();
        if (!cart)
            throw new common_1.NotFoundException('Cart not found.');
        const item = cart.products.find(item => item.product.toString() === productId);
        if (!item)
            throw new common_1.NotFoundException('Item not found in cart.');
        if (quantity <= 0) {
            cart.products = cart.products.filter(item => item.product.toString() !== productId);
        }
        else {
            item.quantity = quantity;
        }
        return await cart.save();
    }
    async removeItem(userId, productId) {
        const cart = await this.cartModel.findOne({ userId }).exec();
        if (!cart)
            throw new common_1.NotFoundException('Cart not found.');
        cart.products = cart.products.filter(item => item.product.toString() !== productId);
        return await cart.save();
    }
    async syncCart(userId, anonymousItems) {
        const cart = await this.getCart(userId);
        for (const newItem of anonymousItems) {
            const index = cart.products.findIndex(item => item.product.toString() === newItem.productId);
            if (index >= 0) {
                cart.products[index].quantity += newItem.quantity;
            }
            else {
                cart.products.push({ product: new mongoose_3.Types.ObjectId(newItem.productId), quantity: newItem.quantity });
            }
        }
        return await cart.save();
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(cart_schema_1.Cart.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CartService);
//# sourceMappingURL=cart.service.js.map