import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(username: string, password: string){
    const user = await this.usersService.find(username);
    if (user && user.password === password) return user;
    return;
  }
}
