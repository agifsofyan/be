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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_register_dto_1 = require("./dto/user-register.dto");
const user_edit_dto_1 = require("./dto/user-edit.dto");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async register(userRegisterDTO, res) {
        const result = await this.userService.create(userRegisterDTO);
        return res.status(common_1.HttpStatus.CREATED).json({
            statusCode: common_1.HttpStatus.CREATED,
            message: 'Registration is successful',
            data: result
        });
    }
    async list(res) {
        const result = await this.userService.list();
        return res.status(common_1.HttpStatus.OK).json({
            statusCode: common_1.HttpStatus.OK,
            message: 'Get users is successful',
            data: result
        });
    }
    async detail(id, res) {
        const result = await this.userService.detail(id);
        return res.status(common_1.HttpStatus.OK).json({
            statusCode: common_1.HttpStatus.OK,
            message: `Success get user by id ${id}`,
            data: result
        });
    }
    async update(id, res, input) {
        const result = await this.userService.update(id, input);
        return res.status(common_1.HttpStatus.OK).json({
            statusCode: common_1.HttpStatus.OK,
            message: 'The user has been successfully updated.',
            data: result
        });
    }
    async delete(id, res) {
        const result = await this.userService.delete(id);
        if (result == 'ok') {
            return res.status(common_1.HttpStatus.OK).json({
                statusCode: common_1.HttpStatus.OK,
                message: `Success remove user by id ${id}`
            });
        }
    }
};
__decorate([
    common_1.Post(),
    swagger_1.ApiOperation({ summary: 'User registration' }),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_register_dto_1.UserRegisterDTO, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "register", null);
__decorate([
    common_1.Get(),
    swagger_1.ApiOperation({ summary: 'User List' }),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "list", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiOperation({ summary: 'Get User By Id' }),
    swagger_1.ApiParam({
        name: 'id',
        required: true,
        explode: true,
        type: String,
        example: '60c71508777593a109d7e99a',
        description: 'User ID'
    }),
    __param(0, common_1.Param('id')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "detail", null);
__decorate([
    common_1.Put(':id'),
    swagger_1.ApiOperation({ summary: 'Update user by id' }),
    swagger_1.ApiParam({
        name: 'id',
        required: true,
        explode: true,
        type: String,
        example: '60c71508777593a109d7e99a',
        description: 'User ID'
    }),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Res()),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, user_edit_dto_1.UpdateUserDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    swagger_1.ApiOperation({ summary: 'Delete user' }),
    swagger_1.ApiParam({
        name: 'id',
        required: true,
        explode: true,
        type: String,
        example: '60c71508777593a109d7e99a',
        description: 'User ID'
    }),
    __param(0, common_1.Param('id')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "delete", null);
UserController = __decorate([
    swagger_1.ApiTags("Users"),
    common_1.Controller('users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map