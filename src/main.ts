// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Smart Parking Lot Management API')
    .setDescription(
      'This API allows clients to manage parking lots, including creating new lots, ' +
        'viewing available slots, updating lot information, and deleting lots. ' +
        'It supports authentication, authorization, pagination, and is documented with Swagger.',
    )
    .setVersion('1.0.0')
    .addTag(
      'Authentication',
      'Endpoints for user login and access token generation',
    )
    .addTag('Users', 'Operations related to user management')
    .addTag('Parking Lots', 'CRUD operations for managing parking lots')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Enter JWT token received after logging in',
      },
      'access-token',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Enable validation
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
