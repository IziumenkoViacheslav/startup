import { DatabaseModule } from './database/database.module';
import { Module } from '@nestjs/common';
import * as Joi from '@hapi/joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphqlFederationModule } from './graphql/graphql.module';
import { GetPaymentsResolver } from './graphql/resolvers/get.payments.resolver';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

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
        POSTGRES_DB: Joi.string().required(),
      })      
    }),
    DatabaseModule,
    GraphqlFederationModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, GetPaymentsResolver],
})
export class AppModule { }
