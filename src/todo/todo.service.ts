import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task.dto';
import { GetSpecificTodoDto } from './dto/get-specific-todo.dto';

@Injectable()
export class TodoService {
  private tasks: { id: string; title: string; description?: string }[] = [];

  createTask(data: CreateTaskDto) {
    this.tasks.push({ ...data, id: new Date().toISOString() });
  }

  getAllList() {
    return this.tasks;
  }

  getSpecificTask(data: GetSpecificTodoDto) {
    const item = this.tasks.find((object) => object.id === data.id);
    if (item) {
      return item;
    }
    throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  }
}
