// src/config/database.config.ts
import { MongooseModule } from '@nestjs/mongoose';

export const DatabaseModule = MongooseModule.forRoot(process.env.DATABASE_URI || 'mongodb://localhost:27017/ecommerce');