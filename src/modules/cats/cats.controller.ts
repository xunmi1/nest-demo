import { Body, Controller, Get, HttpException, HttpStatus, NotFoundException, Param, ParseIntPipe, Post, UsePipes } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatDto } from './cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  // adds a cats
  @Post()
  async create(@Body() cat: CatDto) {
    this.catsService.create(cat);
    return {
      data: cat,
      message: 'this action adds a cats'
    };
  }

  @Get()
  async getAll() {
    console.log(1);
    return await this.catsService.findAll();
  }

  @Get(':id')
  // `ParseIntPipe`: 将 `id` 由 `string` 类型尝试转换为 `number`
  @UsePipes(ParseIntPipe)
  async findOne(@Param('id') id: number) {
    const cat = await this.catsService.findOne(id);
    console.log(cat);
    if (!cat) {
      throw new NotFoundException();
    }
    return cat;
  }

  @Get('/prevent')
  prevent() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
}
