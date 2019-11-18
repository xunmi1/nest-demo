import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  // 此模块提供的 providers 的子集，其它模块引入此模块时可用
  exports: [CatsService],
})
export class CatsModule {}
