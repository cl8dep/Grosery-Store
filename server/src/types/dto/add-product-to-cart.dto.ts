import { IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class AddProductToCartDto {
  @ApiProperty()
  @IsDefined()
  id: number;

  @ApiProperty()
  @IsDefined()
  quantity: number;
}

export default AddProductToCartDto;
