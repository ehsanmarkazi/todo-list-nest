import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { HashService } from 'src/shared/hash.service';
import { JwtService } from 'src/shared/jwt.service';
import { PrismaService } from './../shared/prisma.service';
import { LoginUserInput } from './dto/login-user-input';
import { RegisterUserInput } from './dto/register-user-input.dto';


@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private hashService: HashService,
  ) { }

  async signIn(loginUserInput: LoginUserInput) {
    const user = await this.prisma.user.findUnique({ where: { email: loginUserInput.email } });
    if (!user)
      throw new ForbiddenException("User Not Found");

    const pMatch = await this.hashService.compare(loginUserInput.password, user.password);
    if (!pMatch)
      throw new ForbiddenException('Username or Password is entered incorrectly');
    return {
      access_token: this.jwtService.sign(user.id, user.email),
      user: { ...user }
    }
  }

  async signUp(registerUserInput: RegisterUserInput) {
    const hash = await this.hashService.hash(registerUserInput.password)
    try {
      const checkUser = await this.prisma.user.findUnique({ where: { email: registerUserInput.email } });
      if (checkUser)
        throw new BadRequestException('This ٍEmail is Already Registered');

      const user = await this.prisma.user.create({
        data: {
          email: registerUserInput.email,
          firstName: registerUserInput.firstName,
          lastName: registerUserInput.lastName,
          password: hash,
          createdAt: new Date(),
        },
      
      });
      return {
        access_token: this.jwtService.sign(user.id, user.email),
        user: { ...user }
      }
    } catch (error) {
      if (error instanceof BadRequestException) throw error;
      throw new NotFoundException(error.message);
    }


  }


}
