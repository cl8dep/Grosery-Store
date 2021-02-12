import { Column } from 'typeorm';
import { IsDefined, IsEnum } from 'class-validator';
import { ProductUnit } from '../../database/entities/product/product.entity';

class ProductDto {
  @IsDefined()
  name: string;

  @IsDefined()
  price: number;

  @IsDefined()
  quantity: number;

  @IsDefined()
  @IsEnum(ProductUnit)
  unit: ProductUnit;
}

export default ProductDto;
