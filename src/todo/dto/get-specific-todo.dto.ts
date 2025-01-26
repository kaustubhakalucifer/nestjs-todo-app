import { IsString } from 'class-validator';

export class GetSpecificTodoDto {
  @IsString()
  id: string;
}
