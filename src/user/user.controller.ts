import { Controller, Get } from '@nestjs/common';

@Controller('/users')
export class UserController {
  // constructor(private readonly appService: AppService) {}
  @Get()
  getUser() {
    return 'A User';
  }
}
