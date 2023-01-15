import { LoginUserInput } from './login-user-input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAuthInput extends PartialType(LoginUserInput) {
  @Field(() => Int)
  id: number;
}
