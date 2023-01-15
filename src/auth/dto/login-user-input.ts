import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty,MinLength } from 'class-validator';

@InputType()
export class LoginUserInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  @MinLength(6)
  password:string
}
