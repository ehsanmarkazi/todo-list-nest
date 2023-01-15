import { ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { PrismaService } from './shared/prisma.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
  GraphQLModule.forRoot<ApolloDriverConfig>({
      driver:ApolloDriver,
      autoSchemaFile:join(process.cwd(),'src/schema.gql'),
      sortSchema:true
    }),
  AuthModule,

  ],
  
  providers: [PrismaService],
})
export class AppModule {}
