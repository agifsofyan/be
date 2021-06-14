"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_register_dto_1 = require("./user-register.dto");
class UpdateUserDTO extends swagger_1.PartialType(user_register_dto_1.UserRegisterDTO) {
}
exports.UpdateUserDTO = UpdateUserDTO;
//# sourceMappingURL=user-edit.dto.js.map