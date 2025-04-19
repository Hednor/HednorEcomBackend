export declare enum AnalyticsPeriod {
    DAILY = "daily",
    WEEKLY = "weekly",
    MONTHLY = "monthly",
    YEARLY = "yearly"
}
export declare class AnalyticsFilterDto {
    period?: AnalyticsPeriod;
    startDate?: Date;
    endDate?: Date;
    limit?: number;
}
