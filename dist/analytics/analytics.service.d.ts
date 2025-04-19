import { Model } from 'mongoose';
import { Order } from '../orders/schemas/order.schema';
import { Product } from '../products/schemas/product.schema';
import { User } from '../users/schemas/user.schema';
import { AnalyticsFilterDto } from './dto/analytics-filter.dto';
import * as ExcelJS from 'exceljs';
export declare class AnalyticsService {
    private orderModel;
    private productModel;
    private userModel;
    constructor(orderModel: Model<Order>, productModel: Model<Product>, userModel: Model<User>);
    getDashboardStats(): Promise<{
        totalOrders: number;
        totalRevenue: any;
        totalProducts: number;
        totalUsers: number;
    }>;
    getSalesAnalytics(filter: AnalyticsFilterDto): Promise<any[]>;
    getTopProducts(filter: AnalyticsFilterDto): Promise<any[]>;
    getTopUsers(filter: AnalyticsFilterDto): Promise<any[]>;
    exportToCSV(filter: AnalyticsFilterDto): Promise<any>;
    exportToExcel(filter: AnalyticsFilterDto): Promise<ExcelJS.Buffer>;
}
