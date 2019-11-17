import { Injectable, ValidationPipe } from '@nestjs/common';

@Injectable()
export class GlobalPipe extends ValidationPipe {
  constructor() {
    /**
     * @param whitelist 过滤掉**未使用装饰器**的属性, 对于不需要验证的属性，需使用 `@Allow()` 装饰器
     * @param skipMissingProperties 跳过缺失的属性 (值为 `null | undefined`), 对于必填属性, 可使用 `@IsNotEmpty()` 等类似装饰器
     * @param transform 是否自动转换为对应的 DTO 对象, 由`class-transformer`完成实例化, **注意**：DTO 类的构造函数将失效
     */
    super({
      whitelist: true,
      skipMissingProperties: true,
      transform: true,
      forbidUnknownValues: true,
      validationError: {
        target: false,
      },
    });
  }
}
