import { Injectable } from '@nestjs/common';

@Injectable()
export class Auth0Service {
  public async test(item){
    return item;
  }
}
