

import { Injectable } from "@nestjs/common";
import { UserDto } from "./user.dto.js";

@Injectable()
export class UserService {
 
      private readonly users = [
        {
          id: '1',
          email: 'john.doe@example.com',
          passwordHash: 'hash-john',
          role: 'customer' as const,
        },
        {
          id: '2',
          email: 'jane.doe@example.com',
          passwordHash: 'hash-jane',
          role: 'admin' as const,
        },
      ];
    

    async getUsers() {
        return this.users;
    }

    async createUser(userDto: UserDto) {
        return userDto;
    }
}