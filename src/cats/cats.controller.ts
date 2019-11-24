import { Body, Controller, Get, HttpException, HttpStatus, NotFoundException, Param, ParseIntPipe, Post, UsePipes } from '@nestjs/common';
import { Roles, Auth } from 'src/common';
import { CatsService } from './cats.service';
import { CatDto } from './cat.dto';


@Controller('cats')
@Auth()
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  // adds a cats
  @Post()
  @Roles('admin')
  async create(@Body() cat: CatDto) {
    this.catsService.create(cat);
    return {
      data: cat,
      message: 'this action adds a cats',
    };
  }

  @Get()
  @Roles('admin')
  async getAll() {
    return await this.catsService.findAll();
  }

  @Get(':id')
  // `ParseIntPipe`: 将 `id` 由 `string` 类型尝试转换为 `number`
  @UsePipes(ParseIntPipe)
  async findOne(@Param('id') id: number) {
    const cat = await this.catsService.findOne(id);
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
