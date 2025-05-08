// // src/refund/refund.module.ts
// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { Refund, RefundSchema } from './refund.model';
// import { RefundResolver } from './refund.resolver';
// import { RefundService } from './refund.service';
// import { OrderModule } from '../order/order.module'; // 👈 import this


// @Module({
//   imports: [MongooseModule.forFeature([{ name: Refund.name, schema: RefundSchema }])
// ],
  
//   providers: [RefundResolver, RefundService],
  
// })
// export class RefundModule {}


// src/refund/refund.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Refund, RefundSchema } from './refund.model';
import { RefundResolver } from './refund.resolver';
import { RefundService } from './refund.service';
import { OrderModule } from '../order/order.module'; // 👈 Correct import
import { EmailModule } from '../email/email.module'; // 👈 ADD THIS

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Refund.name, schema: RefundSchema }]),
    OrderModule, // 👈 Add this here
    EmailModule,
  ],
  providers: [RefundResolver, RefundService],
})
export class RefundModule {}
