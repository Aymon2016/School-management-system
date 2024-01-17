import   {Injectable} from "@nestjs/common";

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../schema/user.entity';

import { UpdateUserRoleDTO } from "./dto/updateUser.dto";
import { CustomException } from "src/common/filters/customException.filter";

@Injectable()
export class AuthorService {

constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}


  async updateUserRole(id: string, updateRoleDto: UpdateUserRoleDTO): Promise<User> {
    
    try {
      const user = await this.userRepository.findOne({where:[{id:id}]});

      if (!user) {
        throw new CustomException('User not found',404);
      }
      user.role = updateRoleDto.role;
      return this.userRepository.save(user);
  
    } catch (error) {
      throw error
    }
  }

}