import { CreateTodoInput } from './create-todo.input';
import { InputType, Field, PartialType, registerEnumType } from '@nestjs/graphql';


@InputType()
export class UpdateTodoInput extends PartialType(CreateTodoInput) {
  @Field()
  id: string;
  
  @Field(() => AllowedStatus)
  status: AllowedStatus;
}
export enum AllowedStatus {
  todo = "To_do",
  inProgress = "in_progress",
  done = "done"
}
registerEnumType(AllowedStatus, { name: 'SomeEnum' })

