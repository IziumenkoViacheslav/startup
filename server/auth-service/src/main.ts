import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const appName = configService.get('APP_NAME');
  const host = configService.get('HOST');
  const port = configService.get('PORT');
  const version = configService.get('version');
  const globalPrefix = `api/${version}`;
  app.setGlobalPrefix(globalPrefix);

  await app.listen(port, () => {
    console.log(`${appName} is running on http://${host}:${port}/${globalPrefix}`);
  });
}
bootstrap();
