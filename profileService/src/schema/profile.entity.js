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
exports.Profile = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const gender_enum_1 = require("../common/enum/gender.enum");
const religious_enum_1 = require("../common/enum/religious.enum");
let Profile = class Profile {
};
exports.Profile = Profile;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Profile.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Unique)(['userId']),
    __metadata("design:type", String)
], Profile.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], Profile.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], Profile.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], Profile.prototype, "permanentAddress", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], Profile.prototype, "presentAddress", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], Profile.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], Profile.prototype, "contactNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], Profile.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], Profile.prototype, "birthDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(gender_enum_1.Gender),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], Profile.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(religious_enum_1.Religious),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], Profile.prototype, "religious", void 0);
exports.Profile = Profile = __decorate([
    (0, typeorm_1.Entity)()
], Profile);
//# sourceMappingURL=profile.entity.js.map