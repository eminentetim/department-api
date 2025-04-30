import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentsService } from './departments.service';
import { DepartmentsResolver } from './departments.resolver';
import { Department } from './department.entity';
import { SubDepartment } from '../sub-departments/sub-department.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Department, SubDepartment])],
  providers: [DepartmentsService, DepartmentsResolver],
})
export class DepartmentsModule {}
