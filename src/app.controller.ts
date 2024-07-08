import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { getBlockByNumber } from './services/getBlock';
import { getTransactionByHash } from './services/getTransaction';

@Controller()
export class AppController {
  @Get()
  startMesseg() {
    return 'Юзайте адрессную строку, в неё пизайте запрос. /block/[номер] или /transaction/[хэш]';
  }
  constructor(private readonly appService: AppService) {}
}

@Controller('block')
export class AppControllerGetBlock {
  @Get(':height')
  findBlok(@Param() params: any) {
    return getBlockByNumber(params.height);
  }
  constructor(private readonly appService: AppService) {}
}
@Controller('transaction')
export class AppControllerGetTransaction {
  @Get(':hash')
  findTran(@Param() params: any) {
    return getTransactionByHash(params.hash);
  }
  constructor(private readonly appService: AppService) {}
}
