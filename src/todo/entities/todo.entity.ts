import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field()
  id: string;
  
  @Field()
  title: string;
  
  @Field()
  description: string;
  
  @Field()
  status: string;

  @Field()
  createdAt: string;
}
