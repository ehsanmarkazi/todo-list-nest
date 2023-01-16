import { ObjectType, Field } from '@nestjs/graphql';
import { AllowedStatus } from '../dto/update-todo.input';

@ObjectType()
export class Todo {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => AllowedStatus)
  status: AllowedStatus;

  @Field()
  createdAt: string;
}
