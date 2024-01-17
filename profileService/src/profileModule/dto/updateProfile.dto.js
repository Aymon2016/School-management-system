"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfileDTO = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const swagger_1 = require("@nestjs/swagger");
const createProfile_dto_1 = require("./createProfile.dto");
class UpdateProfileDTO extends (0, mapped_types_1.PartialType)((0, swagger_1.OmitType)(createProfile_dto_1.CreateProfileDTO, ['userId'])) {
}
exports.UpdateProfileDTO = UpdateProfileDTO;
//# sourceMappingURL=updateProfile.dto.js.map