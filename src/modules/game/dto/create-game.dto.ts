import { IsNotEmpty, IsString } from 'class-validator';
export class CreateGameDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsNotEmpty()
  @IsString()
  readonly logo: string;
}
