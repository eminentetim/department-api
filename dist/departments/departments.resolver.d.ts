import { DepartmentsService } from './departments.service';
import { Department } from './department.entity';
import { CreateDepartmentInput } from './dto/create-department.input';
import { UpdateDepartmentInput } from './dto/update-department.input';
export declare class DepartmentsResolver {
    private readonly departmentsService;
    constructor(departmentsService: DepartmentsService);
    createDepartment(createDepartmentInput: CreateDepartmentInput): Promise<Department>;
    getDepartments(): Promise<Department[]>;
    getDepartment(id: number): Promise<Department | null>;
    updateDepartment(updateDepartmentInput: UpdateDepartmentInput): Promise<Department | null>;
    removeDepartment(id: number): Promise<Department | null>;
}
