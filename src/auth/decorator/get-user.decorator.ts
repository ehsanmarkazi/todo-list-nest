import { createParamDecorator } from "@nestjs/common/decorators";
import { ExecutionContext } from "@nestjs/common/interfaces";
import { User } from "@prisma/client";

export const GetUser = createParamDecorator(
    (data: string | undefined, ctx: ExecutionContext): User => {
        const request: Express.Request = ctx.switchToHttp().getRequest();
        if (data) {
            return request.user[data];
        }
        return request.user as User;
    },
);