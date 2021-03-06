import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const configService = app.get(ConfigService);
  const appName = configService.get('APP_NAME');
  const host = configService.get('SERVER_HOST');
  const port = Number(configService.get('SERVER_PORT'));
  const version = configService.get('version');
  const globalPrefix = `api/${version}`;
  app.setGlobalPrefix(globalPrefix);

  await app.listen(port, () => {
    console.log(`${appName} NODE_ENV=${process.env.NODE_ENV} docs on http://${host}:${port}/${globalPrefix}`);
  });
}
bootstrap();
