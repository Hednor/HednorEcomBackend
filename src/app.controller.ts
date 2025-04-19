// src/app.controller.ts
import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('Root')
@Controller()
export class AppController {
  @Get()
  @ApiOperation({ summary: 'Check API status' })
  @ApiResponse({ status: 200, description: 'API is running' })
  getHello(): { status: string; message: string; timestamp: string } {
    return {
      status: 'OK',
      message: 'E-Commerce API is running',
      timestamp: new Date().toISOString(),
    };
  }

  @Get('health')
  @ApiOperation({ summary: 'Check API health' })
  @ApiResponse({ status: 200, description: 'API is healthy' })
  getHealth(): { status: string } {
    return { status: 'healthy' };
  }
}