import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { JwtService } from './jwt.service';
import { JwtModule } from '@nestjs/jwt';
import { HashService } from './hash.service';
import { CheckAdminService } from './check-admin.service';

@Module({
    imports: [JwtModule.register({})],
    controllers: [],
    providers: [PrismaService, JwtService, HashService, CheckAdminService],
    exports: [PrismaService, JwtService, HashService, CheckAdminService]
})

export class SharedModule { }