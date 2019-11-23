import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { StrategyTypes } from './constants';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, StrategyTypes.LOCAL) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string){
    const user = this.authService.validateUser(username, password);
    if (!user) throw new UnauthorizedException();
    return user;
  }
}
