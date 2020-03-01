import { ItemsController } from './items.controller';
import { ItemsService } from './items.service'

describe('Items Controller', () => {
  let controller: ItemsController;
  let service: ItemsService;

  beforeEach(async () => {
    service = new ItemsService();
    controller = new ItemsController(service);
  });

  describe('findAll', () => {
    it('should return an array', async () => {

      const result = ["Pizza","Cokie"]
      jest.spyOn(service, 'findAll').mockImplementation(() => result);
      
      expect(await controller.findAll()).toBe(result);
    });
  })

});