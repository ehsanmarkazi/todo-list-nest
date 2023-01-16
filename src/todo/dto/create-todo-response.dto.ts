import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '@prisma/client';


@ObjectType()
export class CreateTodoResponse {

    @Field()
    id: string

    @Field()
    title: string

    @Field()
    description: string

    @Field()
    status: string

}