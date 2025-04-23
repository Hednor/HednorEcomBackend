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
const cart_schema_1 = require("./schemas/cart.schema");
const product_schema_1 = require("../product/product.schema");
const cart_token_schema_1 = require("./schemas/cart-token.schema");
let CartService = class CartService {
    cartModel;
    productModel;
    cartTokenModel;
    constructor(cartModel, productModel, cartTokenModel) {
        this.cartModel = cartModel;
        this.productModel = productModel;
        this.cartTokenModel = cartTokenModel;
    }
    async getCartByUserOrToken(userId, cartToken) {
        let cart;
        if (userId) {
            cart = await this.cartModel.findOne({ userId });
        }
        else if (cartToken) {
            cart = await this.cartModel.findOne({ cartToken });
        }
        return cart;
    }
    async getCart(userId, cartToken) {
        let cart = await this.getCartByUserOrToken(userId, cartToken);
        if (!cart) {
            cart = new this.cartModel({ userId: userId || cartToken, items: [] });
        }
        return cart;
    }
    async addItem(userId, cartToken, productId, quantity) {
        let cart;
        if (userId) {
            cart = await this.cartModel.findOne({ userId });
        }
        else if (cartToken) {
            cart = await this.cartModel.findOne({ cartToken });
        }
        if (!cart) {
            cart = new this.cartModel({ userId: userId || cartToken, items: [] });
        }
        const product = await this.productModel.findById(productId);
        if (!product) {
            throw new common_1.BadRequestException('Product Not Found');
        }
        const cartItems = cart.items;
        const existingItem = cartItems.find((item) => item.productId.toString() === productId);
        if (existingItem) {
            if (existingItem.quantity + quantity > product.stock) {
                throw new common_1.BadRequestException(`Total quantity exceeds stock limit`);
            }
            existingItem.quantity += quantity;
        }
        else {
            cartItems.push({ productId: new mongoose_2.Types.ObjectId(productId), quantity });
        }
        await cart.save();
        return cart;
    }
    async addItemAnonymous(cartToken, productId, quantity) {
        const product = await this.productModel.findById(productId);
        if (!product) {
            throw new common_1.BadRequestException('Product Not Found');
        }
        if (quantity > product.stock) {
            throw new common_1.BadRequestException(`Requested quantity exceeds available stock`);
        }
        let cart = await this.cartModel.findOne({ cartToken });
        if (!cart) {
            cart = new this.cartModel({ cartToken, items: [] });
        }
        const cartItems = cart.items;
        const existingItem = cartItems.find((item) => item.productId.toString() === productId);
        if (existingItem) {
            if (existingItem.quantity + quantity > product.stock) {
                throw new common_1.BadRequestException(`Total quantity exceeds stock limit`);
            }
            existingItem.quantity += quantity;
        }
        else {
            cartItems.push({ productId: new mongoose_2.Types.ObjectId(productId), quantity });
        }
        await cart.save();
        return cart;
    }
    async updateItem(userId, cartToken, productId, quantity) {
        const product = await this.productModel.findById(productId);
        if (!product) {
            throw new common_1.BadRequestException('Product Not Found');
        }
        if (quantity > product.stock) {
            throw new common_1.BadRequestException(`Requested quantity exceeds available stock`);
        }
        let cart = await this.getCartByUserOrToken(userId, cartToken);
        if (!cart)
            throw new common_1.NotFoundException('Cart not found.');
        const cartItems = cart.items;
        const itemIndex = cartItems.findIndex(item => item.productId.toString() === productId);
        if (itemIndex === -1)
            throw new common_1.NotFoundException('Item not found in cart.');
        cartItems[itemIndex].quantity = quantity;
        return await cart.save();
    }
    async removeItem(userId, cartToken, productId) {
        let cart = await this.getCartByUserOrToken(userId, cartToken);
        if (!cart)
            throw new common_1.NotFoundException('Cart not found.');
        const cartItems = cart.items;
        const itemIndex = cartItems.findIndex(item => item.productId.toString() === productId);
        if (itemIndex === -1)
            throw new common_1.NotFoundException('Item not found in cart.');
        cartItems.splice(itemIndex, 1);
        await cart.save();
        return cart;
    }
    async syncCart(userId, cartToken) {
        const anonymousCart = await this.cartModel.findOne({ cartToken });
        if (!anonymousCart)
            throw new common_1.NotFoundException('Anonymous cart not found.');
        let loggedInCart = await this.cartModel.findOne({ userId });
        if (!loggedInCart) {
            loggedInCart = new this.cartModel({ userId, items: [] });
        }
        for (const item of anonymousCart.items) {
            const existingItem = loggedInCart.items.find((cartItem) => cartItem.productId.toString() === item.productId.toString());
            if (existingItem) {
                existingItem.quantity += item.quantity;
            }
            else {
                loggedInCart.items.push(item);
            }
        }
        await loggedInCart.save();
        await this.cartModel.deleteOne({ cartToken });
        return loggedInCart;
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(cart_schema_1.Cart.name)),
    __param(1, (0, mongoose_1.InjectModel)(product_schema_1.Product.name)),
    __param(2, (0, mongoose_1.InjectModel)(cart_token_schema_1.CartToken.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], CartService);
//# sourceMappingURL=cart.service.js.map