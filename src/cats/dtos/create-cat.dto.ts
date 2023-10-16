import { IsString, IsNumber } from 'class-validator';
export class CreateCat {
  @IsString()
  name: string;
  @IsNumber()
  age: number;
  @IsString()
  breed: string;
}
