import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { SubDepartment } from '../sub-departments/sub-department.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType() 
@Entity()
export class Department {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field(() => [SubDepartment], { nullable: true }) //  Adding @Field to expose it in GraphQL
  @OneToMany(() => SubDepartment, subDepartment => subDepartment.department)
  subDepartments: SubDepartment[];
}
