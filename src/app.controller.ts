import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api/status')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): { status: boolean; message: string } {
    return this.appService.getHello();
  }
}
