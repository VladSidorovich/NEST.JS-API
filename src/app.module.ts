import { Module, MiddlewareConsumer, RequestMethod  } from '@nestjs/common';
import { AuthenticationMiddleware } from './common/authentication.middleware';
import { ItemModule } from './items/items.module'
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';

@Module({
  imports: [ItemModule, ShoppingCartModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      .forRoutes(
        { path: '/items', method: RequestMethod.POST },
        { path: '/shopping-cart', method: RequestMethod.POST },
      );
  }
}