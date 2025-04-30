import { SubDepartmentsService } from './sub-departments.service';
import { SubDepartment } from './sub-department.entity';
import { CreateSubDepartmentInput } from './dto/create-sub-department.input';
import { UpdateSubDepartmentInput } from './dto/update-sub-department.input';
export declare class SubDepartmentsResolver {
    private readonly subDepartmentsService;
    constructor(subDepartmentsService: SubDepartmentsService);
    createSubDepartment(createSubDepartmentInput: CreateSubDepartmentInput): Promise<SubDepartment>;
    getSubDepartments(): Promise<SubDepartment[]>;
    getSubDepartment(id: number): Promise<SubDepartment | null>;
    updateSubDepartment(updateSubDepartmentInput: UpdateSubDepartmentInput): Promise<SubDepartment | null>;
    removeSubDepartment(id: number): Promise<SubDepartment | null>;
}
