import { Task } from './entities/task.entity';

export interface ITodoService {
  createTask(title: string, description?: string): Task;
  getTasks(): Task[];
  getTaskById(id: number): Task | undefined;
  updateTask(id: number, title: string, description: string): Task;
  deleteTask(id: number): void;
}
