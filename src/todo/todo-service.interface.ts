import { Task } from './entities/task.entity';
import { UpdateTaskDto } from './dto/update-task.dto';

export interface ITodoService {
  createTask(title: string, description?: string): Promise<Task>;

  getTasks(): Promise<Task[]>;

  getTaskById(id: number): Promise<Task | null>;

  updateTask(id: number, updateTaskDto: UpdateTaskDto): Promise<Task | null>;

  deleteTask(id: number): Promise<void>;
}
