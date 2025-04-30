import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubDepartment } from './sub-department.entity';
import { CreateSubDepartmentInput } from './dto/create-sub-department.input';
import { UpdateSubDepartmentInput } from './dto/update-sub-department.input';

@Injectable()
export class SubDepartmentsService {
  constructor(
    @InjectRepository(SubDepartment)
    private readonly subDepartmentRepository: Repository<SubDepartment>,
  ) {}

  // Create a new sub-department
  async create(createSubDepartmentInput: CreateSubDepartmentInput) {
    const subDepartment = this.subDepartmentRepository.create(createSubDepartmentInput);
    return this.subDepartmentRepository.save(subDepartment);
  }

  // Fetch all sub-departments
  async findAll() {
    return this.subDepartmentRepository.find();
  }

  // Fetch a single sub-department by ID
  async findOne(id: number) {
    return this.subDepartmentRepository.findOne({
      where: { id },
    });
  }

  // Update a sub-department by ID
  async update(id: number, updateSubDepartmentInput: UpdateSubDepartmentInput) {
    await this.subDepartmentRepository.update(id, updateSubDepartmentInput);
    return this.findOne(id);
  }

  // Delete a sub-department by ID
  async remove(id: number) {
    const subDepartment = await this.findOne(id);
    if (subDepartment) {
      await this.subDepartmentRepository.remove(subDepartment);
    }
    return subDepartment;
  }
}
