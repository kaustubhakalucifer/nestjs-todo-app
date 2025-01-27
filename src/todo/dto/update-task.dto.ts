import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateTaskDto {
  @IsString()
  @IsNotEmpty({ message: 'Task title is required' })
  title: string;

  @IsString()
  description?: string;
}
