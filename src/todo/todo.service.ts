import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { ITodoService } from './todo-service.interface';
import { Task } from './entities/task.entity';

@Injectable()
export class TodoService implements ITodoService {
  private tasks: Task[] = [];
  private idCounter = 1;

  updateTask(id: number, title: string, description?: string) {
    const task = this.getTaskById(id);
    if (!task) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    task.title = title;
    task.description = description;
    return task;
  }

  createTask(title: string, description?: string) {
    const task = new Task(this.idCounter++, title, description, false);
    this.tasks.push(task);
    return task;
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: number) {
    return this.tasks.find(
      (object) => object.id === Number.parseInt(id.toString()),
    );
  }

  deleteTask(id: number) {
    const index = this.tasks.findIndex((object) => object.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
    throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  }
}
