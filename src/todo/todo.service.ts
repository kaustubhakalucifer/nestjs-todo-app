import { TaskRepository } from './task.repository';
import { ITodoService } from './todo-service.interface';
import { Inject, Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TodoService implements ITodoService {
  constructor(
    @Inject('TaskRepository') private taskRepository: TaskRepository,
  ) {}

  private idCounter = 1;

  async updateTask(id: number, updateTaskDto: UpdateTaskDto) {
    await this.taskRepository.update(id, updateTaskDto);
    return this.taskRepository.findById(id);
  }

  createTask(title: string, description?: string) {
    const newTask: Partial<Task> = { title, description, id: this.idCounter++ };
    return this.taskRepository.create(newTask);
  }

  getTasks(): Promise<Task[]> {
    return this.taskRepository.findAll();
  }

  getTaskById(id: number) {
    return this.taskRepository.findById(id);
  }

  deleteTask(id: number) {
    return this.taskRepository.delete(id);
  }
}
