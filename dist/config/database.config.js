"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const mongoose_1 = require("@nestjs/mongoose");
exports.DatabaseModule = mongoose_1.MongooseModule.forRoot(process.env.DATABASE_URI || 'mongodb://localhost:27017/ecommerce');
//# sourceMappingURL=database.config.js.map