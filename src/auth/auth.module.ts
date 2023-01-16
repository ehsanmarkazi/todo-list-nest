import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { SharedModule } from 'src/shared/shared.module';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  providers: [AuthResolver, AuthService, JwtStrategy],
  imports: [SharedModule],
})
export class AuthModule { }
