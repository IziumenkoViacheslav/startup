import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const test = { a: 'b' }
    console.log('aaaaaaaaaaaaa');
    
    return 'Hello World!';
  }
}
