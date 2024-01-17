import { IsEnum } from 'class-validator';
import { UserRole } from '../../common/enum/role.enum';

export class UpdateUserRoleDTO {
  @IsEnum(UserRole)
  role: UserRole;
}