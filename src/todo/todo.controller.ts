import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { TodoService } from './todo.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetSpecificTodoDto } from './dto/get-specific-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('')
  listTodo() {
    return this.todoService.getAllList();
  }

  @Get('/:id')
  getSpecificTodo(@Param() todoId: GetSpecificTodoDto) {
    return this.todoService.getSpecificTask(todoId);
  }

  @Post('')
  createNewTask(@Body() createTaskDto: CreateTaskDto) {
    this.todoService.createTask(createTaskDto);
    return {
      message: 'Todo added successfully',
      status: true,
      statusCode: HttpStatus.CREATED,
    };
  }

  @Put('/:id')
  updateSpecificTask() {}

  @Delete('/:id')
  deleteSpecificTask() {}
}
