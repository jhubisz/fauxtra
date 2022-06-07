import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import {
  ReceiptsController,
} from './Controllers'
import { ReceiptsService } from './Services'
import { XMLMiddleware } from './middleware/xml.middleware'

@Module({
  imports: [
    ConfigModule.forRoot(),
  ],
  controllers: [ReceiptsController],
  providers: [ReceiptsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(XMLMiddleware).forRoutes({
      path: '/*',
      method: RequestMethod.POST,
    });
  }
}
