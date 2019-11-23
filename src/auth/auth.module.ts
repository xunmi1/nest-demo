import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';

import { JWT_SECRET, StrategyTypes } from './constants';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';

import { AuthController } from './auth.controller';

const CustomPassportModule = PassportModule.register({ defaultStrategy: StrategyTypes.JWT });
const CustomJwtModule = JwtModule.register({
  secret: JWT_SECRET,
  signOptions: { expiresIn: '2 days' },
});

@Module({
  imports: [CustomPassportModule, CustomJwtModule, UsersModule],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [CustomPassportModule, AuthService],
})
export class AuthModule {}
