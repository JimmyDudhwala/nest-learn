import { Body, Controller, Get, Param, ParseIntPipe, Post, UseFilters, UseGuards, UseInterceptors } from '@nestjs/common';
import { OrdersService } from './orders.service.js';
import { AuthGuard } from './auth.guard.js';
import { CreateOrderDto } from './create-order.dto.js';
import { TimingInterceptor } from './timing.interceptor.js';

@Controller('orders')
@UseGuards(AuthGuard)
@UseInterceptors(TimingInterceptor)  
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}
    @Get()
    getOrders() {
        return this.ordersService.findAll();
    }

    @Get(':id')
    getOrder(@Param('id', ParseIntPipe) id: number) {
        return this.ordersService.findOne(id);
    }

    @Post()
    createOrder(@Body() createOrderDto: CreateOrderDto) {
        return this.ordersService.create(createOrderDto);
    }
}