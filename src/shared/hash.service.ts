import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
@Injectable()
export class HashService {
    hash(data: string) {
        return bcrypt.hash(data, 10);
    }

    compare(data: string, hashed: string) {
        return bcrypt.compare(data, hashed);
    }
}