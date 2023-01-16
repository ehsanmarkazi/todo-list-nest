import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';


export const GetUser = createParamDecorator(
    (data: string, context: ExecutionContext): User => {
        const request = GqlExecutionContext.create(context);
        const user = request.getContext().req.user;
        const { password, ...result} = user       
        return result;
    }
)