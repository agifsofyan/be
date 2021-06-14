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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRegisterDTO = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class UserRegisterDTO {
}
__decorate([
    swagger_1.ApiProperty({
        example: 'New User',
        description: 'User name',
        format: 'string'
    }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UserRegisterDTO.prototype, "nama", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: 'Jalan - jalan',
        description: 'Hoby',
        format: 'string'
    }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UserRegisterDTO.prototype, "hobi", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: 'Jalan kebenaran',
        description: 'Address',
        format: 'string'
    }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UserRegisterDTO.prototype, "alamat", void 0);
__decorate([
    swagger_1.ApiProperty({
        example: '085771461509',
        description: 'Phone Number',
        format: 'string',
        minLength: 9
    }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsPhoneNumber('ID'),
    class_validator_1.MinLength(9),
    class_validator_1.MaxLength(13),
    __metadata("design:type", String)
], UserRegisterDTO.prototype, "nomor_telp", void 0);
exports.UserRegisterDTO = UserRegisterDTO;
//# sourceMappingURL=user-register.dto.js.map