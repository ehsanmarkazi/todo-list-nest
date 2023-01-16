import { UseGuards, Get } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { Todo } from './entities/todo.entity';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { JwtAuthGuard } from './../auth/guard/jwt.guard';
import { CreateTodoResponse } from './dto/create-todo-response.dto';
import { GetUser } from 'src/auth/decorator/get-user.decorator';
import { User } from 'src/user/entities/user.entity';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) { }

  @Mutation(() => CreateTodoResponse)
  @UseGuards(JwtAuthGuard)
  createTodo(@Args('createTodoInput') createTodoInput: CreateTodoInput, @GetUser() user) {
    return this.todoService.create(createTodoInput, user.email);
  }

  @Query(() => [Todo], { name: 'todos' })
  @UseGuards(JwtAuthGuard)
  findAll(@GetUser() user:User) {
    return this.todoService.findAll(user.id);
  }

  @Query(() => Todo, { name: 'todo' })
  @UseGuards(JwtAuthGuard)
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.todoService.findOne(id);
  }

  @Mutation(() => Todo)
  @UseGuards(JwtAuthGuard)
  updateTodo(@Args('updateTodoInput') updateTodoInput: UpdateTodoInput) {
    return this.todoService.update(updateTodoInput.id, updateTodoInput);
  }

  @Mutation(() => Todo)
  @UseGuards(JwtAuthGuard)
  removeTodo(@Args('id', { type: () => String }) id: string) {
    return this.todoService.remove(id);
  }
}
