import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { LoginUserInput } from './dto/login-user-input';
import { RegisterResponse } from './dto/register-response.dto';
import { JwtGuard } from './guard/jwt.guard';
import { UseGuards, Get } from '@nestjs/common';
import { GetUser } from './decorator/get-user.decorator';
import { LoginResponse } from './dto/login-response.dto';
import { RegisterUserInput } from './dto/register-user-input.dto';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) { }

  @Mutation(() => LoginResponse)
  login(@Args('loginUserInput') loginUserInput: LoginUserInput) {
    return this.authService.signIn(loginUserInput);
  }

  @Mutation(() => RegisterResponse)
  Register(@Args('registerUserInput') registerUserInput: RegisterUserInput) {
    return this.authService.signUp(registerUserInput);
  }

}
