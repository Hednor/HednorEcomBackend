"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartToken = exports.CartTokenSchema = void 0;
const mongoose_1 = require("mongoose");
exports.CartTokenSchema = new mongoose_1.Schema({
    token: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});
class CartToken {
    token;
    createdAt;
}
exports.CartToken = CartToken;
//# sourceMappingURL=cart-token.schema.js.map