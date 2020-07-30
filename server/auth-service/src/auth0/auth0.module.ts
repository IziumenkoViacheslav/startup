import { Module } from '@nestjs/common';
import { Auth0Controller } from './auth0.controller';
import { Auth0Service } from './auth0.service';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [Auth0Controller],
  providers: [Auth0Service, JwtStrategy]
})
export class Auth0Module {}
