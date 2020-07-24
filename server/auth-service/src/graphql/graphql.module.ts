import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { GqlModuleOptions } from '@nestjs/graphql/dist/interfaces/gql-module-options.interface';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GetPaymentsResolver } from './resolvers/get.payments.resolver';


/**
 * Module for work with GraphQL including types, queries and mutations
 */
@Module({
  imports: [
    GraphQLFederationModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => {
        const options: GqlModuleOptions = {
          // typePaths: ['./**/*.gql'],
          autoSchemaFile: 'dist/schema.gql', // will be generated
          debug: true,
          tracing: true,
          playground: true,
          context: ({ req }) => ({ req }),
          introspection: true,
        };
        if (process.env.NODE_ENV === 'development') {
          options.cors = {
            origin: '*',
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
            preflightContinue: false,
            optionsSuccessStatus: 204,
            credentials: true,
          };
        }
        return options;
      },
      inject: [ConfigService],
    }),
  ],
  providers:[ GetPaymentsResolver]
})
export class GraphqlFederationModule {}
