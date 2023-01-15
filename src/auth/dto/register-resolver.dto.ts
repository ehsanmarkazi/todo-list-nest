import { LoginUserInput } from './login-user-input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class RegisterResponse extends PartialType(LoginUserInput) {

}
