import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { TodoService } from './todo.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('')
  listTodo() {
    return this.todoService.getTasks();
  }

  @Get(':id')
  getSpecificTodo(@Param('id') id: number) {
    return this.todoService.getTaskById(id);
  }

  @Post('')
  createNewTask(@Body() createTaskDto: CreateTaskDto) {
    const { title, description } = createTaskDto;
    return this.todoService.createTask(title, description);
  }

  @Put(':id')
  updateSpecificTask(
    @Param('id') id: number,
    @Body() updatedDetails: UpdateTaskDto,
  ) {
    return this.todoService.updateTask(id, updatedDetails);
  }

  @Delete('/:id')
  deleteSpecificTask(@Param('id') id: number) {
    return this.todoService.deleteTask(id);
  }
}
