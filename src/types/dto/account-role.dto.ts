import { IsDefined, IsEnum, IsOptional, IsUUID } from 'class-validator';
import { AccountRole } from '../../database/entities/account/account.entity';
import { ApiProperty } from '@nestjs/swagger';

class AccountRoleDto {
  @ApiProperty({
    required: false,
    description:
      'The new account role. If is not exist the role with change automatically.',
  })
  @IsEnum(AccountRole)
  @IsOptional()
  role?: AccountRole;
}

export default AccountRoleDto;
