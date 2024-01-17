import {Controller,  Post , Body,Res,} from "@nestjs/common";
import { AuthService } from "./auth.service";
import {CreateUserDTO} from './dto/createUser.dto';
import {loginUserDTO} from './dto/loginUser.dto';
import { UserRole } from "../common/enum/role.enum";
import {generateToken, verifyToken ,decodeToken  } from '../utilies/tokenGenerate.utilis'
import { Response } from 'express';
import { CustomException } from "src/common/filters/customException.filter";
@Controller("")
export class AuthController {
  constructor(private readonly authService: AuthService ) {}

 @Post("/admin/register")
  async createAdmin(
    @Res() res:Response , 
    @Body() CreateUserDTO:CreateUserDTO
  ): Promise<any> {
    try {

    
   if (!CreateUserDTO.role) {
        CreateUserDTO.role = UserRole.ADMIN; 
      }

  
      const newUser = await this.authService.createAdmin(CreateUserDTO);
     
        const payload = {
            id: newUser.id,
            userName: newUser.userName,
            email: newUser.email,
            role: newUser.role,
        };
        const accessToken  =  await generateToken({ payload })
        const refreshToken = await generateToken({ payload: payload, secret: 'refreshtoken' })
       
        const response = {
            code: 201,
            message: "Admin signup successfull",
            token_data: {
                access_token: accessToken,
                refresh_token: refreshToken,
            },
            links: {
                self: "api/v1/auth/admin/register",
                signin: "api/v1/auth/login"
            }
        };

        res.status(201).json(response);
      
    } catch (error) {
      if (error instanceof CustomException) {
        throw error
      }
      throw new CustomException('Internal Server Error',500)
      
    }
  }

@Post("/register")
  async createUser(
   @Res() res:Response , 
    @Body() CreateUserDTO:CreateUserDTO
  ): Promise<any> {
    try {

       if (CreateUserDTO.role === UserRole.ADMIN) {
        throw new CustomException("Role is not correct value",400)
        }
      const newUser = await this.authService.createUser(CreateUserDTO);

      const payload = {
            id: newUser.id,
            userName: newUser.userName,
            email: newUser.email,
            role: newUser.role,
        };
        const accessToken  =  await generateToken({ payload })
        const refreshToken = await generateToken({ payload: payload, secret: 'refreshtoken' })
       
        const response = {
            code: 201,
            message: "User signup successfull",
            token:{
              access_token :accessToken,
              refresh_token:refreshToken
            },
            links: {
                self: "api/v1/auth/register",
                signin: "api/v1/auth/login"
            }
        };

        res.status(201).json(response);
    } catch (error) {
      if (error instanceof CustomException) {
        throw error
      }
      throw new CustomException('Internal Server Error',500)
     
    }
  }

  @Post("/login")
  async loginUser(
   @Res() res:Response , 
    @Body() loginUserDTO:loginUserDTO
  ): Promise<any> {
    try {

      const newUser = await this.authService.loginUser(loginUserDTO);

      const payload = {
            id: newUser.id,
            userName: newUser.userName,
            email: newUser.email,
            role: newUser.role,
        };
        const accessToken  =  await generateToken({ payload })
        const refreshToken = await generateToken({ payload: payload, secret: 'refreshtoken' })
       
        const response = {
            code: 200,
            message: "sigin successfull",
            data: {
                id: newUser.id,
                userName: newUser.userName,
                email: newUser.email,
                role: newUser.role,
                token_data: {
                    access_token: accessToken,
                    refresh_token: refreshToken,
                }
            },
             links: {
                    self: "api/v1/auth/login",
                    logout:"api/v1/auth/logout"
                }
        };

        res.status(201).json(response);
    } catch (error) {
      
      if (error instanceof CustomException) {
        throw error
      }
      throw new CustomException('Internal Server Error',500)
      
    }
  }

   @Post("/logout")
  async logoutUser(
    @Res() res:Response , 
  ){
    try {
      const response =  await this.authService.logoutUser();
      res.status(200).json(response)
      
    } catch (error) {
      if (error instanceof CustomException) {
        throw error
      }
      throw new CustomException('Internal Server Error',500)
      
    }
  }

  

}
