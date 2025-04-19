import { AnalyticsService } from './analytics.service';
import { AnalyticsFilterDto } from './dto/analytics-filter.dto';
import { Response } from 'express';
export declare class AnalyticsController {
    private readonly analyticsService;
    constructor(analyticsService: AnalyticsService);
    getDashboardStats(): Promise<{
        totalOrders: number;
        totalRevenue: any;
        totalProducts: number;
        totalUsers: number;
    }>;
    getSalesAnalytics(filter: AnalyticsFilterDto): Promise<any[]>;
    getTopProducts(filter: AnalyticsFilterDto): Promise<any[]>;
    getTopUsers(filter: AnalyticsFilterDto): Promise<any[]>;
    exportCSV(filter: AnalyticsFilterDto, res: Response): Promise<Response<any, Record<string, any>>>;
    exportExcel(filter: AnalyticsFilterDto, res: Response): Promise<Response<any, Record<string, any>>>;
}
