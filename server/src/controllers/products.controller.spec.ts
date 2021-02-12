import ProductsController from './products.controller';
import { ProductService } from '../database/entities/product/product.service';
import { DatabaseModule } from '../database/database.module';
import { Test } from '@nestjs/testing';
import { ResponseObjectFactory } from '@nestjs/swagger/dist/services/response-object-factory';
import { Product } from '../database/entities/product/product.entity';

describe('CatsController', () => {
  let productsController: ProductsController;
  let productsService: ProductService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [ProductsController],
      providers: [ProductService],
    }).compile();

    productsController = moduleRef.get<ProductsController>(ProductsController);
    productsService = moduleRef.get<ProductService>(ProductService);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      /*const result = ['test'];
      jest.spyOn(catsService, 'findAll').mockImplementation(() => result);*/

      expect(await productsService.findAll());
    });
  });
});
