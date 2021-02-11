import { IsDefined, IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export default class SignInDto {
  @IsEmail()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @IsDefined()
  @ApiProperty()
  password: string;
}
