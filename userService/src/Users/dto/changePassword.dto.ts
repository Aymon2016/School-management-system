import {IsNotEmpty, IsString } from 'class-validator';

export class changePasswordDTO {
  @IsString()
  @IsNotEmpty()
  currentPassword: string;

  @IsString()
  @IsNotEmpty()
  newPassword: string;

  @IsString()
  @IsNotEmpty()
  confirmPassword: string;
}