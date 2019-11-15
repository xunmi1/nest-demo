import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {};

  // adds a cats
  @Post()
  async create(@Body() cat: Cat) {
    this.catsService.create(cat);
    return 'this action adds a cats';
  }

  @Get()
  async getAll() {
    return this.catsService.findAll();
  }
}
