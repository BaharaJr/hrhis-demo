import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello():{status: boolean, message: string} {
    return {status: true, message: 'Up and Running!!!'};
  }
}
