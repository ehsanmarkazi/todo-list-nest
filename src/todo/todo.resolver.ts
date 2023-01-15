import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { Todo } from './entities/todo.entity';
import { CreateTodoInput } from './dto/create-todo.input';
import { UpdateTodoInput } from './dto/update-todo.input';
import { JwtGuard } from './../auth/guard/jwt.guard';
import { UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/decorator/get-user.decorator';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) { }

  @Mutation(() => Todo)
  //@UseGuards(JwtGuard)
  createTodo(@Args('createTodoInput') createTodoInput: CreateTodoInput, @GetUser() user) {
    return "hello"
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
