import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import SignUpDto from '../types/dto/sign-up.dto';
import Account from '../database/entities/account/account.entity';
import { AccountService } from '../database/entities/account/account.service';
import CartService from '../database/entities/cart/cart.service';
import AddProductToCartDto from '../types/dto/add-product-to-cart.dto';
import { ProductService } from '../database/entities/product/product.service';
import Cart from '../database/entities/cart/cart.entity';
import { ProductCartService } from '../database/entities/product-cart/product-cart.service';
import RemoveProductFromCart from '../types/dto/remove-product-from-cart.dto';
import ProductCart from '../database/entities/product-cart/product-cart.entity';

@Injectable()
class BusinessService {
  constructor(
    private accountService: AccountService,
    private cartService: CartService,
    private readonly productService: ProductService,
    private readonly productCartService: ProductCartService,
  ) {}

  async create(args: SignUpDto): Promise<Account> {
    const cartEntity = await this.cartService.create();
    return await this.accountService.create(args, cartEntity);
  }

  async addProductToCart(userId: string, args: AddProductToCartDto): Promise<any> {
    const account = await this.accountService.findOneById(userId);
    let products = [];
    if (account.cart.products)
      products.push(...account.cart.products);

    const existingItem = products.find(x => x.product.id === args.id);
    let product;
    if (existingItem) {
      product = existingItem;
      product.quantity += args.quantity;
    }
    else {
      product = await this.productService.findOneById(args.id);
      let productCart = await this.productCartService.createOrFind(account.cart.id, product.id);
      productCart.product = product;
      productCart.quantity = (productCart.quantity ? productCart.quantity : 0) +  args.quantity;
      products.push(productCart);
    }
    account.cart.products = products;

    await this.accountService.save(account);
    const subtotal = this.computeCartSubtotal(account.cart.products);
    return {
      subtotal,
      products: account.cart.products,
    };
  }

  async removeProductFromCart(id: string, args: RemoveProductFromCart) {
    const account = await this.accountService.findOneById(id);
    const products = account.cart.products;
    const existingItem = products.find((item: ProductCart) => item.id === args.id);
    if (existingItem) {
        //TODO: Remove the product from the cart and save.
    } else {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        message: "There is not any product in the cart."
      }, HttpStatus.BAD_REQUEST)
    }
  }

  async clearCart(id: string) {
    const account = await this.accountService.findOneById(id);
    for (const item of account.cart.products) {
      await this.productCartService.remove(item)
    }
    account.cart.products = [];
    await this.accountService.save(account);
  }

  async getCartProducts(id: string) {
    const account = await this.accountService.findOneById(id);
    const subtotal = this.computeCartSubtotal(account.cart.products);
    return {
      subtotal,
      products: account.cart.products
    }
  }

  computeCartSubtotal(products) {
    let subtotal = 0;
    products.forEach(function(item) {
      subtotal += (item.quantity * item.product.price)
    });
    return subtotal
  }
}

export default BusinessService;
