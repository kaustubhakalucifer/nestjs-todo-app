import { IsString } from 'class-validator';

export class SpecificTaskDto {
  @IsString()
  id: number;
}
