import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { join } from 'path';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './infrastructure/common/exceptions/AllExceptionFilter';
import { MongoExceptionsFilter } from './infrastructure/common/exceptions/MongoExceptionFilter';
import {
  swaggerConfig,
  swaggerOptions,
  swaggerPath,
} from './infrastructure/config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      stopAtFirstError: true,
    }),
  );
  app.use(cookieParser());

  // enable cors
  app.enableCors({
    origin: true,
    credentials: true,
  });
  console.log(join(__dirname, '../../', 'public/writeup'));
  //render static images
  app.useStaticAssets(join(__dirname, '../../', 'public/writeup/'));

  app.use(cookieParser(process.env.COOKIE_SECRET));

  // use global-scope mongo except
  app.useGlobalFilters(new AllExceptionsFilter(), new MongoExceptionsFilter());

  //app.use(WebSocketGateway());

  app.setGlobalPrefix('api');

  // set global prefix to /api
  const document = SwaggerModule.createDocument(
    app,
    swaggerConfig,
    swaggerOptions,
  );
  SwaggerModule.setup(swaggerPath, app, document);

  await app.listen(parseInt(process.env.API_PORT, 10), '0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log(`API documentation is available on /${swaggerPath}`);
}
bootstrap();
