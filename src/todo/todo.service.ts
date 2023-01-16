import { Injectable } from '@nestjs/common';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { PrismaService } from './../shared/prisma.service';

@Injectable()
export class TodoService {
  constructor(
    private prisma:PrismaService
  ){}
  create(createTodoInput: CreateTodoInput,user:string) {
    return this.prisma.todo.create({
      data:{
        title:createTodoInput.title,
        description:createTodoInput.description,
        userEmail :user,
        createdAt: new Date(),
        updateAt:new Date()
      }
    })
  }

  findAll() {
    return `This action returns all todo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoInput: UpdateTodoInput) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
