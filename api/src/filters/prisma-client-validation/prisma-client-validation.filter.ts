import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { Prisma } from 'generated/prisma';

@Catch(Prisma.PrismaClientValidationError)
export class PrismaClientValidationFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientValidationError, host: ArgumentsHost) {

    console.log(exception.message);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(HttpStatus.BAD_REQUEST).json({
      statusCode: HttpStatus.BAD_REQUEST,
      message: 'Dados da requisição inválidos ou incompletos',
    });

  }
}
