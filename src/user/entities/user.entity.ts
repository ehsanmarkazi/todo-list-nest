import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int)
  id: string;

  @Field()
  email:string

  @Field()
  firstName:string

  @Field()
  lastName:string
  
}
