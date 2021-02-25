import { IsDefined, IsEnum, IsOptional } from 'class-validator';
import { ProductUnit } from '../../database/entities/product/product.entity';
import { ApiProperty } from '@nestjs/swagger';

class EditProductDto {
  @ApiProperty()
  @IsDefined()
  id: number;

  @ApiProperty()
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsOptional()
  price: number;

  @ApiProperty()
  @IsOptional()
  quantity: number;

  @ApiProperty()
  @IsOptional()
  @IsEnum(ProductUnit)
  unit: ProductUnit;
}

export default EditProductDto;
