import { Module } from '@nestjs/common';
import {
  AppController,
  AppControllerGetBlock,
  AppControllerGetTransaction,
} from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    AppControllerGetBlock,
    AppControllerGetTransaction,
  ],
  providers: [AppService],
})
export class AppModule {}
