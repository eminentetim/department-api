import { InputType, Field, Int } from '@nestjs/graphql';
import { IsString, MinLength } from 'class-validator';

@InputType()
export class UpdateDepartmentInput {
  @Field(() => Int)
  id: number;

  @Field()
  @IsString()
  @MinLength(2)
  name: string;
}