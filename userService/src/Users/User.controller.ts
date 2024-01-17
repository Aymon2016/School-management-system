import { Controller, Get,Res,Body,Delete,Patch,Req,ParseUUIDPipe, Param, Query } from '@nestjs/common';
import { UserService } from "./User.service";
import {CONFIG} from '../config/config.constant'
import { QueryDto } from './dto/query.dto';
import { CustomException } from 'src/common/filters/customException.filter';
import { Response,Request } from 'express';
import getPagination from '../utilies/pagination'
import {getHeteOASForAllItems} from '../utilies/Heteoas'
import {transformMemberData} from '../utilies/generateResponse'
import {updateUserDTO} from './dto/updateUser.dto'
import { changePasswordDTO} from './dto/changePassword.dto'


@Controller("")
export class UserController {
  constructor(private readonly userService: UserService) {}

  
   @Get("users/")
  async findAllUsers(

    @Res() res:Response , 
    @Req() req:Request,
    @Query() query: QueryDto

    ){

    const page = query.page || CONFIG.page;
    const limit = query.limit || CONFIG.limit;
    const sort_type = query.sort_type || CONFIG.sort_type;
    const sort_by = query.sort_by || CONFIG.sort_by;
    const search = query.search || CONFIG.search;

    const allQuery = {
      page,
      limit,
      sort_by,
      sort_type,
      search
    }
   try {

        const users = await this.userService.findAll({
            page,
            limit,
            sort_type,
            sort_by,
            search
        })

       
        if (users.length === 0) {
            throw new CustomException('Users  Not Exist',404)
        }

        const data =  transformMemberData(users)
        const total_items = await this.userService.count(search);
        const pagination = getPagination(total_items, page, limit)
        const links = getHeteOASForAllItems({ url: req.url, path: req.path, query:allQuery, hasNext: !!pagination.next_page, hasPrev: !!pagination.prev_page, page })
        
        const response = {
            code: 200,
            message: "Retrieved users successfully",
            data: data,
            pagination: pagination,
            links: links

        }
        res.status(200).json(response);

  }catch(error){
    if (error instanceof CustomException) {
        throw error
      }
      throw new CustomException('Internal Server Error',500)
  }
}

@Get("users/:id")
async findOneUsers(
  @Res() res:Response , 
  @Param('id', ParseUUIDPipe) id: string,
): Promise<any> {
  
  try {
    const user = await this.userService.findOneUser(id);
    const response = {
          code: 200,
          message: "Retrived a user successfull",
          data: {
              id: user.id,
              userName: user.userName,
              email: user.email,
              role: user.role,
          },
          links: {
                  self: "api/v1/auth/users/:id",
                  profile:"api/v1/profiles/:id"
              }
      };
        res.status(200).json(response);
  } catch (error) {
    if (error instanceof CustomException) {
      throw error
    }
    throw new CustomException('Internal Server Error',500)
    
  }
}

@Patch("users/:id")
async updateUser(
  @Res() res:Response , 
  @Param('id', ParseUUIDPipe) id: string,
  @Body() updateUserDTO: updateUserDTO,
): Promise<any> {
  
  try {
    const user = await this.userService.updateUser(id,updateUserDTO);
    const response = {
          code: 200,
          message: "Update a user successfull",
          data: {
              id: user.id,
              userName: user.userName,
              email: user.email,
              role: user.role,
          },
          links: {
                  self: "api/v1/auth/users/:id",
                  profile:"api/v1/profiles/:id"
              }
      };
        res.status(200).json(response);
  } catch (error) {
    if (error instanceof CustomException) {
      throw error
    }
    throw new CustomException('Internal Server Error',500)
    
  }
}

@Delete('users/:id')
  async deleteUser(
      @Param('id') id: string,
      @Res() res:Response , 
    ): Promise<any> {

    try {
      const isDeleted = await this.userService.deleteUser(id);
      if(isDeleted){
        res.status(204).json({
          code:204,
          message:"Delete successfull"
        })
      }


    } catch (error) {
       if (error instanceof CustomException) {
      throw error
    }
    throw new CustomException('Internal Server Error',500) 
    }

  }

  @Patch('users/:id/change_password')
  async changePassword(
    @Param('id') userId: string,
    @Res() res:Response,
    @Body() changePasswordDTO: changePasswordDTO
  ): Promise<void> {

    const {currentPassword,newPassword,confirmPassword} = changePasswordDTO

   try {
    
     const isChangedPassword = await this.userService.changePassword(userId, currentPassword,newPassword,confirmPassword);
      
     if(isChangedPassword){
          const response = {
            code : 200,
            message: 'change password successfull',
            links:{
              login:'api/v1/auth/login'
            }
          }

        res.status(200).json(response)
      }

   } catch (error) {
    
     if (error instanceof CustomException) {
      throw error
    }
    throw new CustomException('Internal Server Error',500) 
    }
   }

}
