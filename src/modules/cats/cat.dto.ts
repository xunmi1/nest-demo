import { IsInt, IsString, IsNotEmpty } from 'class-validator';

export class CatDto {
  @IsString()
  @IsNotEmpty()
  private readonly name: string;

  @IsInt()
  private readonly age: number;

  @IsString()
  private readonly breed: string;
}
