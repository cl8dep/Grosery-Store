import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class SignUpDto {
  @IsNotEmpty()
  @ApiProperty()
  firstName: string;

  @IsNotEmpty()
  @ApiProperty()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  password?: string;

  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  picture?: string;

  @IsNotEmpty()
  @IsOptional()
  @ApiPropertyOptional()
  cellphone?: string;

  @IsNotEmpty()
  @IsOptional()
  @ApiPropertyOptional()
  address?: string;
}
