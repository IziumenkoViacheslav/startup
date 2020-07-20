import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphqlFederationModule } from './graphql/graphql.module';
import { GetPaymentsResolver } from './graphql/resolvers/get.payments.resolver';
// import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.env.${process.env.NODE_ENV}` }),
    // GraphQLModule.forRootAsync({
    //   useFactory: async (configService: ConfigService) => ({
    //     // typePaths: ['./src/**/*.graphql'],
    //   }),
    // }),
    GraphqlFederationModule,
  ],
  controllers: [AppController],
  providers: [AppService, GetPaymentsResolver],
})
export class AppModule {}
