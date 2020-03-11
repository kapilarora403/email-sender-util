import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('send-email')
  getHello(@Body() body) {
    const {to} = body
    return this.appService.getHello(to);
  }
}
