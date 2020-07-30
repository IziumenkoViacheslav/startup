import { DatabaseModule } from './database/database.module';
import { Module } from '@nestjs/common';
import * as Joi from '@hapi/joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphqlFederationModule } from './graphql/graphql.module';
import { GetPaymentsResolver } from './graphql/resolvers/get.payments.resolver';
import { UserModule } from './user/user.module';
import { Auth0Module } from './auth0/auth0.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
      validationSchema: Joi.object({
        PORT: Joi.number(),
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB_NAME: Joi.string().required(),
      })      
    }),
    DatabaseModule,
    GraphqlFederationModule,
    UserModule,
    Auth0Module,
  ],
  controllers: [AppController],
  providers: [AppService, GetPaymentsResolver],
})
export class AppModule { }
