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
import { SpecificTaskDto } from './dto/get-specific-todo.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('')
  listTodo() {
    return this.todoService.getAllList();
  }

  @Get('/:id')
  getSpecificTodo(@Param() todoId: SpecificTaskDto) {
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
  updateSpecificTask(@Param() updateTodoId: SpecificTaskDto, @Body() updatedDetails: UpdateTaskDto) {
    return this.todoService.updateSpecificTask(updateTodoId, updatedDetails);
  }

  @Delete('/:id')
  deleteSpecificTask(@Param() todoId: SpecificTaskDto) {
    return this.todoService.deleteSpecificTask(todoId);
  }
}
