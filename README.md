# Nest demo

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Notes

1. 使用 `@Use***` (Pipe|Filter|***) 等 `Decorator` 时, 尽可能使用类而不是该类的实例来创建。
因为 `Nest` 可以快捷地在整个模块中复用同一类的实例，从而减少对内存的占用。
2. 同时使用多个装饰器时，由上至下依次对装饰器表达式求值，求值的结果会被当作函数，由下至上依次调用

## Start

启动项目

### Installation

```bash
$ npm install
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run build
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
