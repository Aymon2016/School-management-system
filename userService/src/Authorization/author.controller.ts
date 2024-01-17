import {Controller,   Body,Res,Patch , Param,  ParseUUIDPipe} from "@nestjs/common";
import { AuthorService } from "./author.service";
import { UpdateUserRoleDTO } from "./dto/updateUser.dto";
import { Response } from 'express';
import { CustomException } from "src/common/filters/customException.filter";
@Controller("")
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Patch("/users/:id/change_role")
  async updateUserRole(
    @Res() res:Response , 
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateRoleDto: UpdateUserRoleDTO,
  ): Promise<any> {
   
    try {
      const updatedUser = await this.authorService.updateUserRole(id, updateRoleDto);
      const response = {
            code: 200,
            message: "Role change successfull",
            data: {
                id: updatedUser.id,
                name: updatedUser.userName,
                email: updatedUser.email,
                role: updatedUser.role,
            },
            links: {
                    self: "api/v1/auth/users/:id",
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

}
