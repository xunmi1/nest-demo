import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';

import { LoggerMiddleware } from './common/middleware';
import { GlobalPipe } from './common/pipes';
import { HttpExceptionFilter } from './common/filters';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CatsModule } from './modules/cats/cats.module';
import { CatsController } from './modules/cats/cats.controller';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [
    AppService,
    // 或者对 `Service` 类使用 `@UseFilters()` 装饰器(需手动实例化)，这里是由框架来实例化并启用依赖注入
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
    // 或者使用 `@UsePipes()` | `app.useGlobalPipes()`
    { provide: APP_PIPE, useClass: GlobalPipe },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(CatsController);
  }
}

