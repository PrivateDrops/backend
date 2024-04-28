import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { rawBody: true });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove unknown properties
      transform: true, // auto-transform request payloads to specified types
      forbidNonWhitelisted: true,
    }),
  );
  app.enableCors({
    // true for all origins
    origin: '*',
  });
  app.enableShutdownHooks();

  await app.listen(3000);
}
bootstrap();
