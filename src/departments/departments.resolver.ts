import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DepartmentsService } from './departments.service';
import { Department } from './department.entity';
import { CreateDepartmentInput } from './dto/create-department.input';
import { UpdateDepartmentInput } from './dto/update-department.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth.guard';

@Resolver(() => Department)
export class DepartmentsResolver {
  constructor(private readonly departmentsService: DepartmentsService) {}

  // Create a new department
  @Mutation(() => Department)
  @UseGuards(GqlAuthGuard)
  createDepartment(@Args('createDepartmentInput') createDepartmentInput: CreateDepartmentInput) {
    return this.departmentsService.create(createDepartmentInput);
  }

  // Fetch all departments
  @Query(() => [Department])
  @UseGuards(GqlAuthGuard)
  getDepartments() {
    return this.departmentsService.findAll();
  }

  // Fetch a single department by ID
  @Query(() => Department)
  @UseGuards(GqlAuthGuard)
  getDepartment(@Args('id', { type: () => Int }) id: number) {
    return this.departmentsService.findOne(id);
  }

  // Update a department by ID
  @Mutation(() => Department)
  @UseGuards(GqlAuthGuard)
  updateDepartment(@Args('updateDepartmentInput') updateDepartmentInput: UpdateDepartmentInput) {
    return this.departmentsService.update(updateDepartmentInput.id, updateDepartmentInput);
  }

  // Delete a department by ID
  @Mutation(() => Department)
  @UseGuards(GqlAuthGuard)
  removeDepartment(@Args('id', { type: () => Int }) id: number) {
    return this.departmentsService.remove(id);
  }
}