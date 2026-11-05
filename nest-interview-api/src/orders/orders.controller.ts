import { Controller, Get } from '@nestjs/common';
import { OrdersService } from './orders.service.js';

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}
    @Get()
    getOrders() {
        return this.ordersService.findAll();
    }
}