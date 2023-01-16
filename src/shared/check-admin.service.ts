import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { PrismaService } from './prisma.service';

@Injectable()
export class CheckAdminService {
    constructor(private readonly prisma: PrismaService) { }
    async check(userEmail: string, todoId: string) {
        const userCheck = await this.prisma.todo.findFirst({
            where: {
                id:todoId,
                userEmail: userEmail
            }
        })
        return !!userCheck;
    }
}