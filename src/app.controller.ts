import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CatsService } from './modules/cats/cats.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly catsService: CatsService
  ) {}

  @Get()
  getHello(): string {
    console.log(this.catsService);
    return this.appService.getHello();
  }
}
