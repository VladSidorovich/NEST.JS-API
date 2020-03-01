import { ValidationPipe } from './items.pipe';

describe('ItemsPipe', () => {
  it('should be defined', () => {
    expect(new ValidationPipe()).toBeDefined();
  });
});
