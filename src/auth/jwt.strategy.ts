import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';
import { JWT_SECRET, StrategyTypes } from './constants';
import { SignOptions } from './auth.interface';

export class JwtStrategy extends PassportStrategy(Strategy, StrategyTypes.JWT) {
  constructor() {
    const params: StrategyOptions = {
      // 提供从请求中提取 JWT 信息的方法
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JWT_SECRET,
    };

    super(params);
  }

  async validate(payload: SignOptions) {
    return { userId: payload.sub, username: payload.username };
  }
}
