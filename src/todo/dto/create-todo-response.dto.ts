import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';


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

    @Field()
    user: User

}