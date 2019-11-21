import { Controller, UseGuards, Post, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(@Body() user: AuthDto) {
    return 'Login successful';
  }
}
