import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatDto } from './cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  // adds a cats
  @Post()
  async create(@Body() cat: CatDto) {
    this.catsService.create(cat);
    return 'this action adds a cats';
  }

  @Get()
  async getAll() {
    return this.catsService.findAll();
  }

  @Get('/prevent')
  prevent() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
}
