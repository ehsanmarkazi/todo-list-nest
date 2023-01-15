import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { JwtService } from './jwt.service';
import { JwtModule } from '@nestjs/jwt';
import { HashService } from './hash.service';

@Module({
    imports: [JwtModule.register({})],
    controllers: [],
    providers: [PrismaService, JwtService, HashService],
    exports: [PrismaService, JwtService, HashService]
})

export class SharedModule { }