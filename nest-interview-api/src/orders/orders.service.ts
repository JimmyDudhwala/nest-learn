import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './create-order.dto.js';
import { UserService } from '../user/user.service.js';

@Injectable()
export class OrdersService {
  constructor(private readonly userService: UserService) {}


  private readonly orders = [
    {
      id: 1,
      name: 'Order 1',
      description: 'Description 1',
    },
    {
      id: 2,
      name: 'Order 2',
      description: 'Description 2',
    },
  ];

  create(createOrderDto: CreateOrderDto) {
    return createOrderDto;
  }

  findAll() {
    return this.orders;
  }

  findOne(id: number) {
    const order = this.orders.find((order) => order.id === id);
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return order;
  }
}