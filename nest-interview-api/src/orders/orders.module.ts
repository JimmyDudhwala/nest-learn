import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller.js';
@Module({
  imports: [],
    controllers: [OrdersController],
})
export class OrdersModule {}