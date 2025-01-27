import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task.dto';
import { SpecificTaskDto } from './dto/get-specific-todo.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TodoService {
  private tasks: { id: string; title: string; description?: string }[] = [];

  updateSpecificTask(taskId: SpecificTaskDto, updatedData: UpdateTaskDto) {
    const objectIndex = this.tasks.findIndex(object => object.id === taskId.id);
    if(objectIndex !== -1) {
      this.tasks[objectIndex].title = updatedData.title;
      this.tasks[objectIndex].description = updatedData.description;
      return {
        message: 'Task updated successfully',
        status: true,
        statusCode: HttpStatus.OK
      }
    }
    throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  }

  createTask(data: CreateTaskDto) {
    this.tasks.push({ ...data, id: new Date().toISOString() });
  }

  getAllList() {
    return this.tasks;
  }

  getSpecificTask(data: SpecificTaskDto) {
    const item = this.tasks.find((object) => object.id === data.id);
    if (item) {
      return item;
    }
    throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  }

  deleteSpecificTask(data: SpecificTaskDto) {
    const index = this.tasks.findIndex(object => object.id === data.id);
    if(index !== -1) {
      this.tasks.splice(index, 1);
      return {
        message: 'Task deleted successfully',
        status: true,
        statusCode: HttpStatus.OK
      }
    }
    throw new HttpException('Not found', HttpStatus.NOT_FOUND)
  }
}
