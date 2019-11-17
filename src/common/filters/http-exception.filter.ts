import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

// `@Catch` 只捕获 HTTP 异常
@Catch(HttpException)
// HTTP 异常过滤器
export class HttpExceptionFilter implements ExceptionFilter {
  /**
   * @param exception 当前正在处理的异常对象
   * @param host 根据应用程序的类型包含不同的参数数组, 对任何执行上下文的基础参数进行适配
   */
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const content = HttpExceptionFilter.transformResponse(exception);

    // 使用 `express` 的 `response` 对象处理异常的响应结果
    response
      .status(status)
      .json({
        ...content,
        timestamp: Date.now(),
        path: request.url,
      });
  }

  private static transformResponse(exception: HttpException) {
    const result = exception.getResponse();
    if (typeof result === 'string') return { message:  result };
    return result;
  }
}
