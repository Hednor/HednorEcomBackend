// src/analytics/analytics.controller.ts
import { Controller, Get, Query, UseGuards, Res } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { AnalyticsFilterDto } from './dto/analytics-filter.dto';
import { Roles } from '../auth copy/decorators/roles.decorator';
import { RolesGuard } from '../auth copy/guards/roles.guard';
import { Role } from '../users/schemas/user.schema';
import { Response } from 'express';

@Controller('analytics')
@Roles(Role.ADMIN)
@UseGuards(RolesGuard)
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('dashboard')
  getDashboardStats() {
    return this.analyticsService.getDashboardStats();
  }

  @Get('sales')
  getSalesAnalytics(@Query() filter: AnalyticsFilterDto) {
    return this.analyticsService.getSalesAnalytics(filter);
  }

  @Get('top-products')
  getTopProducts(@Query() filter: AnalyticsFilterDto) {
    return this.analyticsService.getTopProducts(filter);
  }

  @Get('top-users')
  getTopUsers(@Query() filter: AnalyticsFilterDto) {
    return this.analyticsService.getTopUsers(filter);
  }

  @Get('export/csv')
  async exportCSV(@Query() filter: AnalyticsFilterDto, @Res() res: Response) {
    const csv = await this.analyticsService.exportToCSV(filter);
    res.header('Content-Type', 'text/csv');
    res.attachment('sales-report.csv');
    return res.send(csv);
  }

  @Get('export/excel')
  async exportExcel(@Query() filter: AnalyticsFilterDto, @Res() res: Response) {
    const excel = await this.analyticsService.exportToExcel(filter);
    res.header('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.attachment('sales-report.xlsx');
    return res.send(excel);
  }
}