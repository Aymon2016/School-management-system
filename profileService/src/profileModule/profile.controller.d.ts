import { Response } from 'express';
import { CreateProfileDTO } from './dto/createProfile.dto';
import { ProfileService } from './profile.service';
import { UpdateProfileDTO } from './dto/updateProfile.dto';
export declare class ProfileController {
    private readonly profileService;
    constructor(profileService: ProfileService);
    createProfile(res: Response, CreateProfileDTO: CreateProfileDTO): Promise<void>;
    findOneProfileById(id: string, res: Response): Promise<any>;
    findOneProfileByuserId(id: string, res: Response): Promise<any>;
    updateProfile(res: Response, id: string, updateProfileDTO: UpdateProfileDTO): Promise<any>;
}
