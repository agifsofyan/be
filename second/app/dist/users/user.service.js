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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(input) {
        let user = new this.userModel(input);
        const isNameExist = await this.userModel.findOne({ nama: user.nama });
        if (isNameExist) {
            throw new common_1.BadRequestException('The name you\'ve entered is already exist.');
        }
        const isHPExist = await this.userModel.findOne({ nomor_telp: user.nomor_telp });
        if (isHPExist) {
            throw new common_1.BadRequestException('The phone number you\'ve entered is already exist.');
        }
        await user.save();
        return user;
    }
    async list() {
        const users = await this.userModel.find();
        return users;
    }
    async detail(id) {
        const user = await this.userModel.findById(id);
        if (!user)
            throw new common_1.NotFoundException('user not found');
        return user;
    }
    async update(id, input) {
        let user = await this.userModel.findById(id);
        if (!user) {
            throw new common_1.BadRequestException('user not found');
        }
        try {
            await this.userModel.findByIdAndUpdate(id, input);
            return await this.userModel.findById(id);
        }
        catch (err) {
            throw new common_1.NotImplementedException("can't update this user");
        }
    }
    async delete(id) {
        try {
            await this.userModel.findByIdAndRemove(id);
            return 'ok';
        }
        catch (err) {
            throw new common_1.NotImplementedException('The user could not be deleted or user not found');
        }
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('User')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map