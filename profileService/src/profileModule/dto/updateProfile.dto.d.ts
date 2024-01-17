import { CreateProfileDTO } from './createProfile.dto';
declare const UpdateProfileDTO_base: import("@nestjs/mapped-types").MappedType<Partial<Omit<CreateProfileDTO, "userId">>>;
export declare class UpdateProfileDTO extends UpdateProfileDTO_base {
}
export {};
