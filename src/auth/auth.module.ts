import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  providers: [AuthResolver, AuthService],
  imports: [SharedModule],
})
export class AuthModule { }
