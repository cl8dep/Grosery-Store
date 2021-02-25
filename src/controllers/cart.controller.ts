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
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import AddProductToCartDto from '../types/dto/add-product-to-cart.dto';
import BusinessService from '../services/bussines.service';
import { IUser } from '../types/user.interface';
import { User } from '../decorators/user.decorator';
import RemoveProductFromCart from '../types/dto/remove-product-from-cart.dto';

@ApiTags('Cart')
@Controller("cart")
class CartController {
  constructor(private readonly businessService: BusinessService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getCartProducts(@User() user: IUser, @Res() res: Response) {
    const products = await this.businessService.getCartProducts(user.id);
    res.status(200).json(products)
  }

  @UseGuards(JwtAuthGuard)
  @Post("clear")
  async clear(@Body() body: AddProductToCartDto, @User() user: IUser, @Res() res: Response) {
    await this.businessService.clearCart(user.id);
    res.status(200).end();
  }

  @UseGuards(JwtAuthGuard)
  @Post("add-product")
  async addProduct(@Body() body: AddProductToCartDto, @User() user: IUser, @Res() res: Response) {
    const result = await this.businessService.addProductToCart(user.id, body);
    res.status(200).json(result);
  }

  @UseGuards(JwtAuthGuard)
  @Delete("remove-product")
  async removeProduct(@Body() body: RemoveProductFromCart, @User() user: IUser, @Res() res: Response) {
    const result = await this.businessService.removeProductFromCart(user.id, body);
    res.status(200).json(result);
  }


}

export default CartController;
