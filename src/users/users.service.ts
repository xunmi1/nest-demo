import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      { userId: 1, username: 'admin', password: 'root' },
      { userId: 2, username: 'test_01', password: '123456' },
      { userId: 3, username: 'test_02', password: '111111' },
    ]
  }

  async find(username: string) {
    return this.users.find(user => user.username === username);
  }
}
