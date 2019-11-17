import { Injectable } from '@nestjs/common';
import { CatDto } from './cat.dto';

@Injectable()
export class CatsService {
  private readonly cats: CatDto[] = [];

  create(cat: CatDto) {
    console.log(cat);
    this.cats.push(cat);
  }

  findAll() {
    return this.cats;
  }
}
