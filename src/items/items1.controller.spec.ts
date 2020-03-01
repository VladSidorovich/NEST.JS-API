import { Test } from '@nestjs/testing';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

describe('CatsController', () => {
  let itemsController: ItemsController;
  let itemsService: ItemsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
        controllers: [ItemsController],
        providers: [ItemsService],
      }).compile();

    itemsService = moduleRef.get<ItemsService>(ItemsService);
    itemsController = moduleRef.get<ItemsController>(ItemsController);
  });

  describe('findAll', () => {
    it('should return menu', async () => {
      const result = ["Pizza","Cokie"]
      jest.spyOn(itemsService, 'findAll').mockImplementation(() => result);
      expect(await itemsController.findAll()).toBe(result);
    });
  });
});