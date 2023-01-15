import { ForbiddenException, Injectable } from '@nestjs/common';
import { HashService } from 'src/shared/hash.service';
import { JwtService } from 'src/shared/jwt.service';
import { PrismaService } from './../shared/prisma.service';
import { LoginUserInput } from './dto/login-user-input';


@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private hashService: HashService,
  ) { }

  async login(loginUserInput: LoginUserInput) {
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

  // create(createAuthInput: CreateAuthInput) {
  //   return 'This action adds a new auth';
  // }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  // update(id: number, updateAuthInput: UpdateAuthInput) {
  //   return `This action updates a #${id} auth`;
  // }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
