import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const conf = new DocumentBuilder()
    .setTitle('Ventas')
    .setDescription('API de test para ventas')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, conf);
  SwaggerModule.setup('api', app, document);
  app.enableCors({
    origin: [
      'http://localhost:3000',
      // 'http://example.com',
      // 'http://www.example.com',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  });


  // await app.listen(3000);
  await app.listen(process.env.BACKEND_PORT || 4000);
}
bootstrap();
