import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Department } from '../departments/department.entity';
import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType() // This decorator turns the class into a GraphQL output type
@Entity()
export class SubDepartment {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @ManyToOne(() => Department, department => department.subDepartments)
  department: Department;
}
