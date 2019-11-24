import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Request } from 'express';

export declare const ROLES_KEY = 'ROLES';

@Injectable()
export class RolesGuard implements CanActivate {
  static readonly ROLES_KEY = ROLES_KEY;

  constructor(private readonly reflector: Reflector = new Reflector()) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<string[] | undefined>(RolesGuard.ROLES_KEY, context.getHandler());
    if (!roles) return true;
    const request = context.switchToHttp().getRequest<Request>();
    // TODO: 根据 `request` 中的用户信息，判断是否具有权限
    return true;
  }
}
