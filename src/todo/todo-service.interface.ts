import { Task } from './entities/task.entity';

export interface ITodoService {
  createTask(title: string, description?: string): Promise<Task>;
  getTasks(): Promise<Task[]>;
  getTaskById(id: number): Promise<Task | null>;
  updateTask(
    id: number,
    title: string,
    description: string,
  ): Promise<Task | null>;
  deleteTask(id: number): Promise<void>;
}
