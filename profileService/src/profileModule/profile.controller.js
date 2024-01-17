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
exports.ProfileController = void 0;
const common_1 = require("@nestjs/common");
const customException_filter_1 = require("../common/filters/customException.filter");
const createProfile_dto_1 = require("./dto/createProfile.dto");
const profile_service_1 = require("./profile.service");
const updateProfile_dto_1 = require("./dto/updateProfile.dto");
let ProfileController = class ProfileController {
    constructor(profileService) {
        this.profileService = profileService;
    }
    async createProfile(res, CreateProfileDTO) {
        try {
            const profile = await this.profileService.CreateProfile(CreateProfileDTO);
            if (!profile) {
                throw new customException_filter_1.CustomException('Users  Not Exist', 404);
            }
            const response = {
                code: 201,
                message: "Profile create successfully",
                data: profile,
                links: {
                    self: "/api/v1/profile/",
                    profile: "/api/v1/profile/:id"
                }
            };
            res.status(201).json(response);
        }
        catch (error) {
            if (error instanceof customException_filter_1.CustomException) {
                throw error;
            }
            throw new customException_filter_1.CustomException('Internal Server Error', 500);
        }
    }
    async findOneProfileById(id, res) {
        try {
            const findProfile = await this.profileService.findProfileById(id);
            const response = {
                code: 200,
                message: "Profile retrieved successfull",
                data: findProfile,
                links: {
                    self: "/api/v1/profile/:id",
                }
            };
            res.status(200).json(response);
        }
        catch (error) {
            if (error instanceof customException_filter_1.CustomException) {
                throw error;
            }
            throw new customException_filter_1.CustomException('Internal Server Error', 500);
        }
    }
    async findOneProfileByuserId(id, res) {
        console.log('user id calling');
        try {
            const findProfile = await this.profileService.findProfileByUserId(id);
            const response = {
                code: 200,
                message: "Profile retrieved successfull",
                data: findProfile,
                links: {
                    self: "/api/v1/profile/:id",
                }
            };
            res.status(200).json(response);
        }
        catch (error) {
            if (error instanceof customException_filter_1.CustomException) {
                throw error;
            }
            throw new customException_filter_1.CustomException('Internal Server Error', 500);
        }
    }
    async updateProfile(res, id, updateProfileDTO) {
        try {
            const updatedProfile = await this.profileService.updateProfile(id, updateProfileDTO);
            const response = {
                code: 200,
                message: "Profile updated successfull",
                data: updatedProfile,
                links: {
                    self: "/api/v1/profile/:id",
                    profile: "/api/v1/profile/:id"
                }
            };
            return res.status(200).json(response);
        }
        catch (error) {
            if (error instanceof customException_filter_1.CustomException) {
                throw error;
            }
            throw new customException_filter_1.CustomException('Internal Server Error', 500);
        }
    }
};
exports.ProfileController = ProfileController;
__decorate([
    (0, common_1.Post)("/"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, createProfile_dto_1.CreateProfileDTO]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "createProfile", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "findOneProfileById", null);
__decorate([
    (0, common_1.Get)('/users/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "findOneProfileByuserId", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, updateProfile_dto_1.UpdateProfileDTO]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "updateProfile", null);
exports.ProfileController = ProfileController = __decorate([
    (0, common_1.Controller)(""),
    __metadata("design:paramtypes", [profile_service_1.ProfileService])
], ProfileController);
//# sourceMappingURL=profile.controller.js.map