import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from '../../common/filters';

@Module({
  controllers: [CatsController],
  providers: [
    CatsService,
    // 或者对 `Service` 类使用 `@UseFilters()` 装饰器(需手动实例化)，这里是由框架来实例化并启用依赖注入
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
  ],
  // 此模块提供的 providers 的子集，其它模块引入此模块时可用
  exports: [CatsService],
})
export class CatsModule {}
