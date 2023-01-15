import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { LoginUserInput } from './dto/login-user-input';
import { UpdateAuthInput } from './dto/update-auth.input';
import { JwtGuard } from './guard/jwt.guard';
import { UseGuards, Get } from '@nestjs/common';
import { GetUSer } from './decorator/get-user.decorator';
import { LoginResponse } from './dto/login-response.dto';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) { }

  @Mutation(() => LoginResponse)
  login(@Args('loginUserInput') loginUserInput: LoginUserInput) {
    return this.authService.login(loginUserInput);
  }
  

}
