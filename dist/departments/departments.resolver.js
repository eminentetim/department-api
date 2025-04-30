"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const departments_service_1 = require("./departments.service");
const department_entity_1 = require("./department.entity");
const create_department_input_1 = require("./dto/create-department.input");
const update_department_input_1 = require("./dto/update-department.input");
const common_1 = require("@nestjs/common");
const gql_auth_guard_1 = require("../auth/gql-auth.guard");
let DepartmentsResolver = class DepartmentsResolver {
    departmentsService;
    constructor(departmentsService) {
        this.departmentsService = departmentsService;
    }
    createDepartment(createDepartmentInput) {
        return this.departmentsService.create(createDepartmentInput);
    }
    getDepartments() {
        return this.departmentsService.findAll();
    }
    getDepartment(id) {
        return this.departmentsService.findOne(id);
    }
    updateDepartment(updateDepartmentInput) {
        return this.departmentsService.update(updateDepartmentInput.id, updateDepartmentInput);
    }
    removeDepartment(id) {
        return this.departmentsService.remove(id);
    }
};
exports.DepartmentsResolver = DepartmentsResolver;
__decorate([
    (0, graphql_1.Mutation)(() => department_entity_1.Department),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)('createDepartmentInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_department_input_1.CreateDepartmentInput]),
    __metadata("design:returntype", void 0)
], DepartmentsResolver.prototype, "createDepartment", null);
__decorate([
    (0, graphql_1.Query)(() => [department_entity_1.Department]),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DepartmentsResolver.prototype, "getDepartments", null);
__decorate([
    (0, graphql_1.Query)(() => department_entity_1.Department),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DepartmentsResolver.prototype, "getDepartment", null);
__decorate([
    (0, graphql_1.Mutation)(() => department_entity_1.Department),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)('updateDepartmentInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_department_input_1.UpdateDepartmentInput]),
    __metadata("design:returntype", void 0)
], DepartmentsResolver.prototype, "updateDepartment", null);
__decorate([
    (0, graphql_1.Mutation)(() => department_entity_1.Department),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DepartmentsResolver.prototype, "removeDepartment", null);
exports.DepartmentsResolver = DepartmentsResolver = __decorate([
    (0, graphql_1.Resolver)(() => department_entity_1.Department),
    __metadata("design:paramtypes", [departments_service_1.DepartmentsService])
], DepartmentsResolver);
//# sourceMappingURL=departments.resolver.js.map