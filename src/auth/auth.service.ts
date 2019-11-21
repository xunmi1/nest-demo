import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/interfaces';
import { SignOptions } from './auth.interface';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.usersService.find(username);
    if (user && user.password === password) {
      return user;
    }
    return;
  }

  async login<T extends Pick<User, 'username' | 'userId'>>(user: T) {
    const payload: SignOptions = { username: user.username, sub: user.userId };
    const accessToken = await this.jwtService.signAsync(payload);
    return { accessToken };
  }
}
