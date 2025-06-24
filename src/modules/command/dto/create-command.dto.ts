import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateCommandDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsNotEmpty()
  @IsString()
  readonly logo: string;
  @IsNotEmpty()
  readonly gameNameId: number;
}
