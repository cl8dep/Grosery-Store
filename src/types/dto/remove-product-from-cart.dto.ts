import { IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class RemoveProductFromCart {
  @ApiProperty()
  @IsDefined()
  id: number;
}

export default RemoveProductFromCart;
