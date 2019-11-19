import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './app.module';
import { GlobalPipe, HttpExceptionFilter, RolesGuard } from './common';

declare const module: {
  hot?: {
    accept(dependencies?: string, callback?: () => void): void
    dispose(handler?: (data: any) => void): void
  }
};
// webpack rot reload
const runHotReload = function <T extends INestApplication>(app: T): void {
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('api');

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalGuards(new RolesGuard());
  app.useGlobalPipes(new GlobalPipe());

  await app.listen(3000);

  runHotReload(app);
}

bootstrap();
