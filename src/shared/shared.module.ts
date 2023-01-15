import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { JwtService } from './jwt.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [JwtModule.register({})],
    controllers: [],
    providers: [PrismaService, JwtService],
    exports: [PrismaService, JwtService]
})

export class SharedModule { }