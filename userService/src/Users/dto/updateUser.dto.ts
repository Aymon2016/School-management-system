import {IsOptional,IsEmail, IsString,IsNotEmpty } from 'class-validator';

export class updateUserDTO {
  @IsString()
  @IsOptional()
  userName?: string;

  @IsEmail()
  @IsOptional()
  email?: string;
}