import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaClientExceptionFilter } from './filters/prisma-client-exception/prisma-client-exception.filter';
import { PrismaClientValidationFilter } from './filters/prisma-client-validation/prisma-client-validation.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(
    new PrismaClientExceptionFilter(httpAdapter),
    new PrismaClientValidationFilter()
  );

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });

  const port = process.env.PORT ?? 3001;
  await app.listen(port, '0.0.0.0');
}
bootstrap();
