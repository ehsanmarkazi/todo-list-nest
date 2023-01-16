import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';
import { JwtService as NestJwtService } from '@nestjs/jwt';
const jwtSecret = process.env.JWT_SECRET;

@Injectable()
export class JwtService {
    constructor(
        private config: ConfigService,
        private nestJwtService: NestJwtService
    ) { }
  
    verify(token: string) {
        return new Promise<any>((res, rej) => {
            jwt.verify(token, jwtSecret, (error: any, data) => {
                if (error) return rej(error);
                return res(data);
            });
        });
    }

    async sign(userId: string, email: string): Promise<string> {
        const payload = {
            sub: userId,
            email,
        };
        const secret = this.config.get('JWT_SECRET')
        

        const token = await this.nestJwtService.signAsync(payload, {
            expiresIn: '3600s',
            secret: secret
        },);

        return token

    }

}
