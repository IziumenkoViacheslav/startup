import { Controller, UseGuards, Post, Body } from '@nestjs/common';
import { Auth0Service } from './auth0.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth0')
export class Auth0Controller {
  constructor(private readonly auth0Service: Auth0Service) { }

  // @UseGuards(AuthGuard('jwt'))
  @Post('test')
  public async create(@Body() item: any) {
    console.log(item);

    return this.auth0Service.test(item);
  }


  @Post('callback')
  callback(@Body() item: any) {
    return { from: 'callback' }
  }

  @Post('logout')
  logout(@Body() item: any) {
    this.auth0Service.test(item);
  }
}
