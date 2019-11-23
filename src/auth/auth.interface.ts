import { User } from '../interfaces';

export interface SignOptions {
  readonly username: User['username'],
  readonly sub: User['userId']
}

