import { IsDefined, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';
import { AccountRole } from '../../database/entities/account/account.entity';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

class EditAccountDto {
  @IsNotEmpty()
  @IsOptional()
  @ApiPropertyOptional()
  firstName?: string;

  @IsNotEmpty()
  @IsOptional()
  @ApiPropertyOptional()
  lastName?: string;

  @IsNotEmpty()
  @IsOptional()
  @ApiPropertyOptional()
  cellphone?: string;

  @IsNotEmpty()
  @IsOptional()
  @ApiPropertyOptional()
  address?: string;
}

export default EditAccountDto;
