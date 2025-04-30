import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from './department.entity';
import { SubDepartment } from '../sub-departments/sub-department.entity';
import { CreateDepartmentInput } from './dto/create-department.input';
import { UpdateDepartmentInput } from './dto/update-department.input';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
    @InjectRepository(SubDepartment)
    private readonly subDepartmentRepository: Repository<SubDepartment>,
  ) {}

  // Create a new department with optional sub-departments
  async create(createDepartmentInput: CreateDepartmentInput) {
    const department = this.departmentRepository.create(createDepartmentInput);
    if (createDepartmentInput.subDepartments) {
      department.subDepartments = createDepartmentInput.subDepartments.map(sub =>
        this.subDepartmentRepository.create(sub),
      );
    }
    return this.departmentRepository.save(department);
  }

  // Fetch all departments with their sub-departments
  async findAll() {
    return this.departmentRepository.find({
      relations: ['subDepartments'],
    });
  }

  // Fetch a single department by ID with its sub-departments
  async findOne(id: number) {
    return this.departmentRepository.findOne({
      where: { id },
      relations: ['subDepartments'],
    });
  }

  // Update a department by ID
  async update(id: number, updateDepartmentInput: UpdateDepartmentInput) {
    await this.departmentRepository.update(id, updateDepartmentInput);
    return this.findOne(id);
  }

  // Delete a department by ID and its sub-departments
  async remove(id: number) {
    const department = await this.findOne(id);
    if (department && department.subDepartments) {
      await this.subDepartmentRepository.remove(department.subDepartments);
    }
    if (department) {
      await this.departmentRepository.remove(department);
    }
    return department;
  }
}
