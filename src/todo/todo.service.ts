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
      },
     include:{user:{select:{email:true}}}
    })
  }

  async findAll(id:string) {
    return await this.prisma.todo.findMany({where:{user:{id}}}) 
  }

  async findOne(id: string) {
    return await this.prisma.todo.findUnique({where:{id}})
  }

  async update(id: string, updateTodoInput: UpdateTodoInput) {
    return await this.prisma.todo.update({
      where:{id},
      data:{
      ...updateTodoInput,
        updateAt: new Date(),
      }
    })
  }

  async remove(id: string) {
    return this.prisma.todo.delete({where:{id}}) 
}

}