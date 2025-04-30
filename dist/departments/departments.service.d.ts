import { Repository } from 'typeorm';
import { Department } from './department.entity';
import { SubDepartment } from '../sub-departments/sub-department.entity';
import { CreateDepartmentInput } from './dto/create-department.input';
import { UpdateDepartmentInput } from './dto/update-department.input';
export declare class DepartmentsService {
    private readonly departmentRepository;
    private readonly subDepartmentRepository;
    constructor(departmentRepository: Repository<Department>, subDepartmentRepository: Repository<SubDepartment>);
    create(createDepartmentInput: CreateDepartmentInput): Promise<Department>;
    findAll(): Promise<Department[]>;
    findOne(id: number): Promise<Department | null>;
    update(id: number, updateDepartmentInput: UpdateDepartmentInput): Promise<Department | null>;
    remove(id: number): Promise<Department | null>;
}
