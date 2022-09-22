import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {join} from 'path'
import { NestExpressApplication } from '@nestjs/platform-express';
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setBaseViewsDir(join(__dirname,'..','/src/views'))
  app.useStaticAssets(join(__dirname,'..','/src/public'))
  app.setViewEngine('ejs')
  app.use(cookieParser())
  await app.listen(3000);
}
bootstrap();
