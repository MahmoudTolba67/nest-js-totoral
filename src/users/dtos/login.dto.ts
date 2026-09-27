import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  MinLength,
} from 'class-validator';

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  @Length(2, 250)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;


}
