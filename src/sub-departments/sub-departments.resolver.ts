import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SubDepartmentsService } from './sub-departments.service';
import { SubDepartment } from './sub-department.entity';
import { CreateSubDepartmentInput } from './dto/create-sub-department.input';
import { UpdateSubDepartmentInput } from './dto/update-sub-department.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth.guard';

@Resolver(() => SubDepartment)
export class SubDepartmentsResolver {
  constructor(private readonly subDepartmentsService: SubDepartmentsService) {}

  // Create a new sub-department
  @Mutation(() => SubDepartment)
  @UseGuards(GqlAuthGuard)
  createSubDepartment(@Args('createSubDepartmentInput') createSubDepartmentInput: CreateSubDepartmentInput) {
    return this.subDepartmentsService.create(createSubDepartmentInput);
  }

  // Fetch all sub-departments
  @Query(() => [SubDepartment])
  @UseGuards(GqlAuthGuard)
  getSubDepartments() {
    return this.subDepartmentsService.findAll();
  }

  // Fetch a single sub-department by ID
  @Query(() => SubDepartment)
  @UseGuards(GqlAuthGuard)
  getSubDepartment(@Args('id', { type: () => Int }) id: number) {
    return this.subDepartmentsService.findOne(id);
  }

  // Update a sub-department by ID
  @Mutation(() => SubDepartment)
  @UseGuards(GqlAuthGuard)
  updateSubDepartment(@Args('updateSubDepartmentInput') updateSubDepartmentInput: UpdateSubDepartmentInput) {
    return this.subDepartmentsService.update(updateSubDepartmentInput.id, updateSubDepartmentInput);
  }

  // Delete a sub-department by ID
  @Mutation(() => SubDepartment)
  @UseGuards(GqlAuthGuard)
  removeSubDepartment(@Args('id', { type: () => Int }) id: number) {
    return this.subDepartmentsService.remove(id);
  }
}