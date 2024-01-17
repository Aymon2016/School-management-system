import   {Injectable,ConflictException,NotFoundException,UnauthorizedException} from "@nestjs/common";
import * as bcrypt from 'bcryptjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like,ILike,FindOneOptions } from 'typeorm';
import { User } from "src/schema/user.entity";
import { CustomException } from "src/common/filters/customException.filter";
import { updateUserDTO } from "./dto/updateUser.dto";
import {generateHash,hashMatched} from '../utilies/hashing'


@Injectable()
export class UserService {

constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

async findAll({

  page = 1,
  limit = 10,
  sort_by = 'userName', 
  sort_type = 'dsc', 
  search = ''

}): Promise<User[]> {


   try {
    const filter: any = {
      userName: Like(`%${search}%`),
    };

    const users = await this.userRepository.find({
        where: filter,
        order: { [sort_by]: sort_type.toUpperCase() },
        skip: (page - 1) * limit,
        take: limit,
      });

    return users
   } catch (error) {
      throw error
   }

  }

  async count(search?: string): Promise<number> {

    const filter = {
      userName: ILike(`%${search}%`),
    };

    const count = await this.userRepository.count({
      where: filter,
    });

    return count;
  }




  async findOneUser(id: string): Promise<User> {

    const options: FindOneOptions<User> = {
      where: { id },
    };
    const user = await this.userRepository.findOne(options);
    if (!user) {
      throw new CustomException('User not found',404);
    }

    return user;
  }

  async updateUser (id:string, updateUserDTO:updateUserDTO):Promise<User> {

    console.log(updateUserDTO)

    let user = await this.findOneUser(id)
     
    if (!user) {
      throw new CustomException('User not found',404);
    }

    try {
        if (updateUserDTO.userName !== user.userName && updateUserDTO.userName !== null) {
          console.log('user name ' , updateUserDTO.userName)
        user.userName = updateUserDTO.userName;
      }

    if (updateUserDTO.email !== user.email && updateUserDTO.email !== null) {
      console.log('user email ' , user.email)
          user.email = updateUserDTO.email;
        }

        console.log(user)
    await this.userRepository.save(user);
    return user;

    } catch (error) {

      throw error
    }
  }

  async deleteUser(id: string): Promise<Boolean> {
    const user = await this.findOneUser(id);

    if (!user) {
      throw new CustomException('User not found',404);
    }

    try {
      await this.userRepository.remove(user);
      return true
    } catch (error) {
      throw error
    }
  }


  async changePassword(userId: string, currentPassword: string, newPassword: string, confirmPassword: string): Promise<true> {
    const user = await this.findOneUser(userId);

    if (!user) {
      throw new CustomException('User not found',404);
    }

    // Check if the current password matches the user's stored password
    const isCurrentPasswordValid = await hashMatched(currentPassword, user.password);

    if (!isCurrentPasswordValid) {
      throw new CustomException('Current password is incorrect', 400);
    }

    // Check if the new password and confirm password match
    if (newPassword !== confirmPassword) {
      throw new CustomException('New password and confirm password do not match' , 400);
    }

    // Assuming you have a method to hash the password, for example, with bcrypt
    try {
      user.password = await generateHash(newPassword);

    await this.userRepository.save(user);
    return true
    } catch (error) {
        throw error
    }
  
  }

}