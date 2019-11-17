import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

declare const module: {
  hot?: {
    accept(dependencies?: string, callback?: () => void): void
    dispose(handler?: (data: any) => void): void
  }
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('api');
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
