import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from '../database/entities/product/product.service';
import { Response } from 'express';
import ProductDto from '../types/dto/product.dto';
import EditProductDto from '../types/dto/edit-product.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Role } from '../auth/decorators/role.decorator';
import { AccountRole } from '../database/entities/account/account.entity';
import DeleteProductDto from '../types/dto/delete-product.dto';

@ApiTags('Products')
@Controller()
class ProductsController {
  constructor(private productService: ProductService) {}

  @UseGuards(JwtAuthGuard)
  @Get('products')
  async getProducts(@Res() res: Response) {
    const products = await this.productService.findAll();
    res.status(200).json(products);
  }

  @UseGuards(JwtAuthGuard)
  @Role(AccountRole.ADMIN)
  @Post('product')
  async createProduct(@Body() body: ProductDto, @Res() res: Response) {
    const product = await this.productService.create(body);
    res.json(product);
  }

  @UseGuards(JwtAuthGuard)
  @Role(AccountRole.ADMIN)
  @Put('product')
  async editProduct(@Body() body: EditProductDto, @Res() res: Response) {
    const editedProduct = await this.productService.update(body);
    if (!editedProduct)
      return res
        .status(404)
        .end('There is not any product with the provided id');
    res.json(editedProduct);
  }

  @UseGuards(JwtAuthGuard)
  @Role(AccountRole.ADMIN)
  @Delete('product')
  async deleteProduct(@Body() body: DeleteProductDto, @Res() res: Response) {
    const editedProduct = await this.productService.remove(body.id);
    if (!editedProduct)
      return res
        .status(404)
        .end('There is not any product with the provided id');
    return res.status(200).json(editedProduct);
  }
}

export default ProductsController;
