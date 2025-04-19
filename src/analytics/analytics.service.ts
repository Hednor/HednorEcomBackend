// src/analytics/analytics.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from '../orders/schemas/order.schema';
import { Product } from '../products/schemas/product.schema';
import { User } from '../users/schemas/user.schema';
import { AnalyticsFilterDto } from './dto/analytics-filter.dto';
import * as ExcelJS from 'exceljs';
import * as csv from 'csv-writer';

@Injectable()
export class AnalyticsService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<Order>,
    @InjectModel(Product.name) private productModel: Model<Product>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

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

  async getSalesAnalytics(filter: AnalyticsFilterDto) {
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

  async getTopProducts(filter: AnalyticsFilterDto) {
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

  async getTopUsers(filter: AnalyticsFilterDto) {
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

  async exportToCSV(filter: AnalyticsFilterDto) {
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

  async exportToExcel(filter: AnalyticsFilterDto) {
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
}