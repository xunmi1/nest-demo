import { Injectable, ValidationPipe } from '@nestjs/common';

@Injectable()
export class GlobalPipe extends ValidationPipe {
  constructor() {
    /**
     * @param whitelist 过滤掉**未使用装饰器**的属性, 对于不需要验证的属性，需使用 `@Allow()` 装饰器
     * @param skipMissingProperties 跳过缺失的属性 (值为 `null | undefined`), 对于必填属性, 需使用 `@IsDefined()`
     * @param transform 自动转换为对应的 DTO 对象, 由`class-transformer`完成实例化
     * - 先执行构造函数, 再对**所有的非静态属性**，无论是否使用装饰器, 绑定新值。
     * 因此, 若在构造函数中对非静态属性进行赋值操作, 会在之后执行过程中被覆盖而无效
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
