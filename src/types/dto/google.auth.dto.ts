import { IsDefined, IsEnum, IsOptional, IsUUID } from 'class-validator';
import { AccountRole } from '../../database/entities/account/account.entity';
import { ApiProperty } from '@nestjs/swagger';

class GoogleAuthDto {

  @IsDefined()
  token: string;
  @IsDefined()
  create: boolean
}

export default GoogleAuthDto;
