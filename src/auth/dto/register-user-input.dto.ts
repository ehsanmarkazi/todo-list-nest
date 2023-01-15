import { LoginUserInput } from './login-user-input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class RegisterUserInput extends PartialType(LoginUserInput) {
    @Field()
    @IsNotEmpty()
    firstName: string

    @Field()
    @IsNotEmpty()
    lastName: string
}
