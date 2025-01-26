import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty({ message: 'title is required' })
  title: string;

  @IsString()
  description?: string;
}
