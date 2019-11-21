import { Injectable } from '@nestjs/common';
import { CatDto } from './cat.dto';

@Injectable()
export class CatsService {
  private readonly cats: CatDto[] = [];

  create(cat: CatDto) {
    this.cats.push(cat);
  }

  findAll() {
    return Promise.resolve(this.cats);
  }

  findOne(id: number): Promise<CatDto | undefined> {
    return Promise.resolve(this.cats[id - 1]);
  }
}
