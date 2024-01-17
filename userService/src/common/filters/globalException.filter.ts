import * as http from 'http';
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let error = 'Internal Server Error';
    let errorMessage = 'An unexpected error occurred';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      errorMessage = exception.message || errorMessage;
    }

    response.status(status).json({
      code: status,
      error:http.STATUS_CODES[status],
      message: errorMessage,
      data:exception.response.message
    });
  }
}
