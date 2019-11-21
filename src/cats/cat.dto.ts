import { IsInt, IsDefined, Length, Allow } from 'class-validator';

/**
 * DTO 类若借助由`class-transformer` 来实例化，则其构造函数对非静态属性的赋值操作，会在之后执行过程中被覆盖而无效
 * 以下验证规则受 `ValidationPipe (GlobalPipe)` 的配置属性影响
 */

export class CatDto {
  // 必填且限制长度
  @IsDefined()
  @Length(4, 10)
  readonly name: string;

  // 可选，如果存在该属性，则必须是 `number`
  @IsInt()
  readonly age: number;

  // 可选，如果存在该属性，则需要验证长度
  @Length(2, 20)
  readonly breed: string;

  // 可选，如果存在该属性，收集此属性，但没有任何验证
  @Allow()
  readonly description: string;

  // 由于没有设置任何装饰器，不会收集此属性, 在 `class-transformer` 自动实例化时，会被设为 `undefined`
  // 以为这该属性将毫无意义
  readonly weight: number;
}
