import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoResolver } from './todo.resolver';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  providers: [TodoResolver, TodoService],
  imports: [SharedModule],
})
export class TodoModule { }
