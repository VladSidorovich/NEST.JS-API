import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { ItemsService } from '../src/items/items.service';
import { INestApplication } from '@nestjs/common';

describe('Cats', () => {
  let app: INestApplication;
  const itemsService = { findAll: () => ["Pizza","Cokie"] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(ItemsService)
      .useValue(itemsService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET items`, () => {
    return request(app.getHttpServer())
      .get('/items')
      .expect(200)
      .expect(["Pizza","Cokie"] );
  });

  afterAll(async () => {
    await app.close();
  });
});