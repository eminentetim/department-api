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
exports.SubDepartmentsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const sub_departments_service_1 = require("./sub-departments.service");
const sub_department_entity_1 = require("./sub-department.entity");
const create_sub_department_input_1 = require("./dto/create-sub-department.input");
const update_sub_department_input_1 = require("./dto/update-sub-department.input");
const common_1 = require("@nestjs/common");
const gql_auth_guard_1 = require("../auth/gql-auth.guard");
let SubDepartmentsResolver = class SubDepartmentsResolver {
    subDepartmentsService;
    constructor(subDepartmentsService) {
        this.subDepartmentsService = subDepartmentsService;
    }
    createSubDepartment(createSubDepartmentInput) {
        return this.subDepartmentsService.create(createSubDepartmentInput);
    }
    getSubDepartments() {
        return this.subDepartmentsService.findAll();
    }
    getSubDepartment(id) {
        return this.subDepartmentsService.findOne(id);
    }
    updateSubDepartment(updateSubDepartmentInput) {
        return this.subDepartmentsService.update(updateSubDepartmentInput.id, updateSubDepartmentInput);
    }
    removeSubDepartment(id) {
        return this.subDepartmentsService.remove(id);
    }
};
exports.SubDepartmentsResolver = SubDepartmentsResolver;
__decorate([
    (0, graphql_1.Mutation)(() => sub_department_entity_1.SubDepartment),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)('createSubDepartmentInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sub_department_input_1.CreateSubDepartmentInput]),
    __metadata("design:returntype", void 0)
], SubDepartmentsResolver.prototype, "createSubDepartment", null);
__decorate([
    (0, graphql_1.Query)(() => [sub_department_entity_1.SubDepartment]),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SubDepartmentsResolver.prototype, "getSubDepartments", null);
__decorate([
    (0, graphql_1.Query)(() => sub_department_entity_1.SubDepartment),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SubDepartmentsResolver.prototype, "getSubDepartment", null);
__decorate([
    (0, graphql_1.Mutation)(() => sub_department_entity_1.SubDepartment),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)('updateSubDepartmentInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_sub_department_input_1.UpdateSubDepartmentInput]),
    __metadata("design:returntype", void 0)
], SubDepartmentsResolver.prototype, "updateSubDepartment", null);
__decorate([
    (0, graphql_1.Mutation)(() => sub_department_entity_1.SubDepartment),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SubDepartmentsResolver.prototype, "removeSubDepartment", null);
exports.SubDepartmentsResolver = SubDepartmentsResolver = __decorate([
    (0, graphql_1.Resolver)(() => sub_department_entity_1.SubDepartment),
    __metadata("design:paramtypes", [sub_departments_service_1.SubDepartmentsService])
], SubDepartmentsResolver);
//# sourceMappingURL=sub-departments.resolver.js.map