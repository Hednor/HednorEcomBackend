



import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';


import { OrderModule } from './order/order.module';
import { InventoryModule } from './inventory/inventory.module';
import { RefundModule } from './refund/refund.module';
import { EmailModule } from './email/email.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver, // 👈 required in v10
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/hadnor'),
    ConfigModule.forRoot({ isGlobal: true }), // .env support
    UserModule,
    AuthModule,
    OrderModule,
    InventoryModule,
    RefundModule,
    EmailModule,
    
    
  ],
})
export class AppModule {}