import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubDepartmentsService } from './sub-departments.service';
import { SubDepartmentsResolver } from './sub-departments.resolver';
import { SubDepartment } from './sub-department.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SubDepartment])],
  providers: [SubDepartmentsService, SubDepartmentsResolver],
})
export class SubDepartmentsModule {}