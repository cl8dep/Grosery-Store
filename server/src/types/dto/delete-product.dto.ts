import { IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class DeleteProductDto {
  @ApiProperty()
  @IsDefined()
  id: number;
}

export default DeleteProductDto;
