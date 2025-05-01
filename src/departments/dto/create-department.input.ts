import { InputType, Field } from '@nestjs/graphql';
import { IsString, MinLength, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
class SubDepartmentInput {
  @Field()
  @IsString()
  @MinLength(2)
  name: string;
}

@InputType()
export class CreateDepartmentInput {
  @Field()
  @IsString()
  @MinLength(2)
  name: string;

  @Field(() => [SubDepartmentInput], { nullable: true })
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => SubDepartmentInput) // Ensuring that each SubDepartmentInput is properly transformed and validated
  subDepartments?: SubDepartmentInput[];
}
