import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

export interface TaskRepository {
  create(task: Partial<Task>): Promise<Task>;

  findAll(): Promise<Task[]>;

  findById(id: number): Promise<Task | null>;

  update(id: number, task: Partial<Task>): Promise<Task | null>;

  delete(id: number): Promise<void>;
}

export class TypeOrmTaskRepository implements TaskRepository {
  constructor(
    @InjectRepository(Task) private readonly taskRepository: Repository<Task>,
  ) {}

  create(task: Partial<Task>): Promise<Task> {
    return this.taskRepository.save(task);
  }

  findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  findById(id: number): Promise<Task | null> {
    return this.taskRepository.findOne({ where: { id } });
  }

  async update(id: number, task: Partial<Task>): Promise<Task | null> {
    await this.taskRepository.update(id, {
      title: task.title,
      description: task.description,
    });
    return this.findById(id);
  }

  delete(id: number): Promise<void> {
    return this.taskRepository.delete(id).then(() => undefined);
  }
}
