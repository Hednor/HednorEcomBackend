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
exports.AnalyticsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const order_schema_1 = require("../orders/schemas/order.schema");
const product_schema_1 = require("../products/schemas/product.schema");
const user_schema_1 = require("../users/schemas/user.schema");
const ExcelJS = require("exceljs");
const csv = require("csv-writer");
let AnalyticsService = class AnalyticsService {
    orderModel;
    productModel;
    userModel;
    constructor(orderModel, productModel, userModel) {
        this.orderModel = orderModel;
        this.productModel = productModel;
        this.userModel = userModel;
    }
    async getDashboardStats() {
        const [totalOrders, totalRevenue, totalProducts, totalUsers] = await Promise.all([
            this.orderModel.countDocuments(),
            this.orderModel.aggregate([{ $group: { _id: null, total: { $sum: '$totalAmount' } } }]),
            this.productModel.countDocuments(),
            this.userModel.countDocuments(),
        ]);
        return {
            totalOrders,
            totalRevenue: totalRevenue[0]?.total || 0,
            totalProducts,
            totalUsers,
        };
    }
    async getSalesAnalytics(filter) {
        const { period = 'monthly', startDate, endDate } = filter;
        const dateGroupFormat = {
            daily: '%Y-%m-%d',
            weekly: '%Y-%U',
            monthly: '%Y-%m',
            yearly: '%Y',
        }[period];
        return this.orderModel.aggregate([
            {
                $match: {
                    createdAt: {
                        $gte: startDate ? new Date(startDate) : new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
                        $lte: endDate ? new Date(endDate) : new Date(),
                    },
                    status: 'Success',
                },
            },
            {
                $group: {
                    _id: { $dateToString: { format: dateGroupFormat, date: '$createdAt' } },
                    totalSales: { $sum: '$totalAmount' },
                    count: { $sum: 1 },
                },
            },
            { $sort: { _id: 1 } },
        ]);
    }
    async getTopProducts(filter) {
        const { limit = 10 } = filter;
        return this.orderModel.aggregate([
            { $unwind: '$items' },
            {
                $group: {
                    _id: '$items.product',
                    totalSold: { $sum: '$items.quantity' },
                    totalRevenue: { $sum: { $multiply: ['$items.quantity', '$items.price'] } },
                },
            },
            { $sort: { totalRevenue: -1 } },
            { $limit: limit },
            {
                $lookup: {
                    from: 'products',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'product',
                },
            },
            { $unwind: '$product' },
            {
                $project: {
                    productId: '$_id',
                    productName: '$product.name',
                    totalSold: 1,
                    totalRevenue: 1,
                },
            },
        ]);
    }
    async getTopUsers(filter) {
        const { limit = 10 } = filter;
        return this.orderModel.aggregate([
            { $match: { status: 'Success' } },
            {
                $group: {
                    _id: '$userId',
                    totalOrders: { $sum: 1 },
                    totalSpent: { $sum: '$totalAmount' },
                },
            },
            { $sort: { totalSpent: -1 } },
            { $limit: limit },
            {
                $lookup: {
                    from: 'users',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'user',
                },
            },
            { $unwind: '$user' },
            {
                $project: {
                    userId: '$_id',
                    userName: '$user.userName',
                    email: '$user.email',
                    totalOrders: 1,
                    totalSpent: 1,
                },
            },
        ]);
    }
    async exportToCSV(filter) {
        const data = await this.getSalesAnalytics(filter);
        const csvWriter = csv.createObjectCsvWriter({
            path: 'temp.csv',
            header: [
                { id: '_id', title: 'Period' },
                { id: 'totalSales', title: 'Total Sales' },
                { id: 'count', title: 'Order Count' },
            ],
        });
        await csvWriter.writeRecords(data);
        return require('fs').readFileSync('temp.csv');
    }
    async exportToExcel(filter) {
        const data = await this.getSalesAnalytics(filter);
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Sales Report');
        worksheet.columns = [
            { header: 'Period', key: 'period', width: 15 },
            { header: 'Total Sales', key: 'totalSales', width: 15 },
            { header: 'Order Count', key: 'count', width: 15 },
        ];
        data.forEach(item => {
            worksheet.addRow({
                period: item._id,
                totalSales: item.totalSales,
                count: item.count,
            });
        });
        return workbook.xlsx.writeBuffer();
    }
};
exports.AnalyticsService = AnalyticsService;
exports.AnalyticsService = AnalyticsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(order_schema_1.Order.name)),
    __param(1, (0, mongoose_1.InjectModel)(product_schema_1.Product.name)),
    __param(2, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], AnalyticsService);
//# sourceMappingURL=analytics.service.js.map