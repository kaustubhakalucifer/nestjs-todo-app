import { Module } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmTaskRepository } from './task.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TodoController],
  providers: [TypeOrmTaskRepository, TodoService],
})
export class TodoModule {}
