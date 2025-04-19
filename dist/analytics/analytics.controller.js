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
exports.AnalyticsController = void 0;
const common_1 = require("@nestjs/common");
const analytics_service_1 = require("./analytics.service");
const analytics_filter_dto_1 = require("./dto/analytics-filter.dto");
const roles_decorator_1 = require("../auth copy/decorators/roles.decorator");
const roles_guard_1 = require("../auth copy/guards/roles.guard");
const user_schema_1 = require("../users/schemas/user.schema");
let AnalyticsController = class AnalyticsController {
    analyticsService;
    constructor(analyticsService) {
        this.analyticsService = analyticsService;
    }
    getDashboardStats() {
        return this.analyticsService.getDashboardStats();
    }
    getSalesAnalytics(filter) {
        return this.analyticsService.getSalesAnalytics(filter);
    }
    getTopProducts(filter) {
        return this.analyticsService.getTopProducts(filter);
    }
    getTopUsers(filter) {
        return this.analyticsService.getTopUsers(filter);
    }
    async exportCSV(filter, res) {
        const csv = await this.analyticsService.exportToCSV(filter);
        res.header('Content-Type', 'text/csv');
        res.attachment('sales-report.csv');
        return res.send(csv);
    }
    async exportExcel(filter, res) {
        const excel = await this.analyticsService.exportToExcel(filter);
        res.header('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.attachment('sales-report.xlsx');
        return res.send(excel);
    }
};
exports.AnalyticsController = AnalyticsController;
__decorate([
    (0, common_1.Get)('dashboard'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AnalyticsController.prototype, "getDashboardStats", null);
__decorate([
    (0, common_1.Get)('sales'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [analytics_filter_dto_1.AnalyticsFilterDto]),
    __metadata("design:returntype", void 0)
], AnalyticsController.prototype, "getSalesAnalytics", null);
__decorate([
    (0, common_1.Get)('top-products'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [analytics_filter_dto_1.AnalyticsFilterDto]),
    __metadata("design:returntype", void 0)
], AnalyticsController.prototype, "getTopProducts", null);
__decorate([
    (0, common_1.Get)('top-users'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [analytics_filter_dto_1.AnalyticsFilterDto]),
    __metadata("design:returntype", void 0)
], AnalyticsController.prototype, "getTopUsers", null);
__decorate([
    (0, common_1.Get)('export/csv'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [analytics_filter_dto_1.AnalyticsFilterDto, Object]),
    __metadata("design:returntype", Promise)
], AnalyticsController.prototype, "exportCSV", null);
__decorate([
    (0, common_1.Get)('export/excel'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [analytics_filter_dto_1.AnalyticsFilterDto, Object]),
    __metadata("design:returntype", Promise)
], AnalyticsController.prototype, "exportExcel", null);
exports.AnalyticsController = AnalyticsController = __decorate([
    (0, common_1.Controller)('analytics'),
    (0, roles_decorator_1.Roles)(user_schema_1.Role.ADMIN),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [analytics_service_1.AnalyticsService])
], AnalyticsController);
//# sourceMappingURL=analytics.controller.js.map