import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const test = { a: 'b' }

    return 'Hello World!';
  }
}
