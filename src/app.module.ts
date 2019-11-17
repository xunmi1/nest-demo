import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CatsModule } from './modules/cats/cats.module';
import { CatsController } from './modules/cats/cats.controller';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(CatsController);
  }
}

