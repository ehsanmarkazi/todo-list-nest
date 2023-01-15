import { ObjectType, PartialType } from '@nestjs/graphql';
import { LoginResponse } from './login-response.dto';

@ObjectType()
export class RegisterResponse extends PartialType(LoginResponse) {

}
