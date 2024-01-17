
import {IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class loginUserDTO {
 

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

}