import { UseGuards, Get } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { Todo } from './entities/todo.entity';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { JwtAuthGuard } from './../auth/guard/jwt.guard';
import { CreateTodoResponse } from './dto/create-todo-response.dto';
import { GetUser } from 'src/auth/decorator/get-user.decorator';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) { }

  @Mutation(() => CreateTodoResponse)
  @UseGuards(JwtAuthGuard)
  createTodo(@Args('createTodoInput') createTodoInput: CreateTodoInput, @GetUser() user) {
    console.log(user)
    return this.todoService.create(createTodoInput,"ehsn@gmail.com");
  }
  
  @Query(() => [Todo], { name: 'todos' })
  //@UseGuards(JwtGuard)
  findAll() {
    return this.todoService.findAll();
  }

  @Query(() => Todo, { name: 'todo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.todoService.findOne(id);
  }

  @Mutation(() => Todo)
  updateTodo(@Args('updateTodoInput') updateTodoInput: UpdateTodoInput) {
    return this.todoService.update(updateTodoInput.id, updateTodoInput);
  }

  @Mutation(() => Todo)
  removeTodo(@Args('id', { type: () => Int }) id: number) {
    return this.todoService.remove(id);
  }
}
