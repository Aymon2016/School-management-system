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
exports.ProfileService = void 0;
const profile_entity_1 = require("../schema/profile.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const customException_filter_1 = require("../common/filters/customException.filter");
let ProfileService = class ProfileService {
    constructor(profileRepository) {
        this.profileRepository = profileRepository;
    }
    async CreateProfile(CreateProfileDTO) {
        const { userId } = CreateProfileDTO;
        const existProfile = await this.profileRepository.findOne({ where: { userId } });
        ;
        if (existProfile) {
            throw new customException_filter_1.CustomException('Profile already exist', 409);
        }
        try {
            const newProfile = await this.profileRepository.create(CreateProfileDTO);
            await this.profileRepository.save(newProfile);
            return newProfile;
        }
        catch (error) {
            throw error;
        }
    }
    async findProfileById(id) {
        try {
            let profile = await this.profileRepository.findOne({ where: { id } });
            if (!profile) {
                throw new customException_filter_1.CustomException('Profile not found', 404);
            }
            return profile;
        }
        catch (error) {
            throw error;
        }
    }
    async findProfileByUserId(userId) {
        try {
            let profile = await this.profileRepository.findOne({ where: { userId } });
            if (!profile) {
                throw new customException_filter_1.CustomException('Profile not found', 404);
            }
            return profile;
        }
        catch (error) {
            throw error;
        }
    }
    async updateProfile(id, updateProfileDTO) {
        try {
            let profile = await this.profileRepository.findOne({ where: { id } });
            if (!profile) {
                throw new customException_filter_1.CustomException('Profile not found', 404);
            }
            profile.firstName = updateProfileDTO.firstName || profile.firstName;
            profile.lastName = updateProfileDTO.lastName || profile.lastName;
            profile.avatar = updateProfileDTO.avatar || profile.avatar;
            profile.birthDate = updateProfileDTO.birthDate || profile.birthDate;
            profile.contactNumber = updateProfileDTO.contactNumber || profile.contactNumber;
            profile.email = updateProfileDTO.email || profile.email;
            profile.gender = updateProfileDTO.gender || profile.gender;
            profile.permanentAddress = updateProfileDTO.permanentAddress || profile.permanentAddress;
            profile.presentAddress = updateProfileDTO.presentAddress || profile.presentAddress;
            profile.religious = updateProfileDTO.religious || profile.religious;
            const updateProfile = await this.profileRepository.save(profile);
            return updateProfile;
        }
        catch (error) {
            throw error;
        }
    }
};
exports.ProfileService = ProfileService;
exports.ProfileService = ProfileService = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(profile_entity_1.Profile)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProfileService);
//# sourceMappingURL=profile.service.js.map