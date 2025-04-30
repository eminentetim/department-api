import { Repository } from 'typeorm';
import { SubDepartment } from './sub-department.entity';
import { CreateSubDepartmentInput } from './dto/create-sub-department.input';
import { UpdateSubDepartmentInput } from './dto/update-sub-department.input';
export declare class SubDepartmentsService {
    private readonly subDepartmentRepository;
    constructor(subDepartmentRepository: Repository<SubDepartment>);
    create(createSubDepartmentInput: CreateSubDepartmentInput): Promise<SubDepartment>;
    findAll(): Promise<SubDepartment[]>;
    findOne(id: number): Promise<SubDepartment | null>;
    update(id: number, updateSubDepartmentInput: UpdateSubDepartmentInput): Promise<SubDepartment | null>;
    remove(id: number): Promise<SubDepartment | null>;
}
