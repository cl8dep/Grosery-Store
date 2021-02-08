import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './database/entities/user/user.service';
import { User } from './database/entities/user/user.entity';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getHello(): Promise<User[]> {
    return await this.userService.findAll();
  }
}
