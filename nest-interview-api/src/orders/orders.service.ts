import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
  findAll() {
    return [
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
  }
}