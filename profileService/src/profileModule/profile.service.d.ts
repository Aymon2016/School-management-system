import { Profile } from 'src/schema/profile.entity';
import { CreateProfileDTO } from './dto/createProfile.dto';
import { Repository } from 'typeorm';
import { UpdateProfileDTO } from './dto/updateProfile.dto';
export declare class ProfileService {
    private readonly profileRepository;
    constructor(profileRepository: Repository<Profile>);
    CreateProfile(CreateProfileDTO: CreateProfileDTO): Promise<Profile>;
    findProfileById(id: string): Promise<Profile>;
    findProfileByUserId(userId: string): Promise<Profile>;
    updateProfile(id: string, updateProfileDTO: UpdateProfileDTO): Promise<Profile>;
}
