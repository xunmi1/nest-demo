import { Controller, Get, Query } from '@nestjs/common';

interface FindAllParams {
  query: any;
}

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Query() query: any) {
    console.log(query);
  }
}
