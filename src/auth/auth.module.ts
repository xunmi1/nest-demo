import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET } from './constants';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';

const CustomJwtModule = JwtModule.register({
  secret: JWT_SECRET,
  signOptions: { expiresIn: '60s' },
});

@Module({
  imports: [UsersModule, PassportModule, CustomJwtModule],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
