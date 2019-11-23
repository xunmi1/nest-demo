import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/interfaces';
import { AuthDto } from './auth.dto';
import { AuthService } from './auth.service';
import { StrategyTypes } from './constants';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // 使用 `local` 授权策略,
  // Notes: 守卫 `guard` 先于管道 `pipe` 执行
  @Post('login')
  @UseGuards(AuthGuard(StrategyTypes.LOCAL))
  async login(@Body() user: AuthDto, @Request() req: { user: User }) {
    const result = await this.authService.login(req.user);
    return { data: result, message: 'Login successful' };
  }

  @Get('profile')
  @UseGuards(AuthGuard())
  getProfile(@Request() req: { user: Pick<User, 'username' | 'userId'> }) {
    return req.user;
  }
}
