import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service.js";
import { UserDto } from "./user.dto.js";


Controller("users")
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Get()
    async getUsers() {
        return this.userService.getUsers();
    }

    @Post("create/user")
    async createUser(@Body() userDto: UserDto) {
        return this.userService.createUser(userDto);
    }
}