

import {IsOptional, IsEmail,IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { UserRole } from '../../common/enum/role.enum';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  userName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;
}