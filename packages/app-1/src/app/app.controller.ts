import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('/world')
  hello() {
    return this.appService.getData();
  }

  @Get('/world-2')
  hello2() {
    return this.appService.getData();
  }

  @Get('/world-3')
  hello3() {
    return this.appService.getData();
  }
}
