import { Length } from 'class-validator';

export class AuthDto {
  @Length(4, 10)
  username: string;

  @Length(4, 30)
  password: string;
}
