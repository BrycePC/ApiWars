import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('API Wars')
    .setDescription('API Wars is supposed to be a benchmarking test for API frameworks and the APIs will have to be written in compliance with this API specification.')
    .setVersion('0.0.1')
    .addServer('http://apiwars.eit-demo.com', undefined, {})
    //.addTag('')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
