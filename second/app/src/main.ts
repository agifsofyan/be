import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';;
import { AppModule } from './app.module';
import 'dotenv/config';

async function bootstrap() {

  const app = await NestFactory.create<NestExpressApplication>(AppModule, {cors: true});

  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api/v1');

  // Swagger API Documentation
  const options = new DocumentBuilder()
    .setTitle('BE')
    .setDescription(`API ${process.env.NODE_ENV}.`)
    .setVersion('1.0')
    .addTag('API')
    .build()

  const document = SwaggerModule.createDocument(app, options);    
  SwaggerModule.setup('api/v1/docs', app, document);

  const PORT = process.env.PORT

  await app.listen(PORT);

  console.log(`[API] BE started running in ${process.env.NODE_ENV} mode on port ${PORT}`);
}
bootstrap();
