import { Injectable } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './orders/all-exceptions.filter.js';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

