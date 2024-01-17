import   {Injectable,ConflictException,NotFoundException,UnauthorizedException} from "@nestjs/common";
import {CreateUserDTO} from './dto/createUser.dto'
import * as bcrypt from 'bcryptjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../schema/user.entity';
import { loginUserDTO } from "./dto/loginUser.dto";
import { UserRole } from "../common/enum/role.enum";
import { CustomException } from "src/common/filters/customException.filter";

@Injectable()
export class AuthService {

constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

async createAdmin( CreateUserDTO:CreateUserDTO): Promise<User> {
    try {
      const { userName, email, password, role } = CreateUserDTO;

      const isAdminHas = await this.userRepository.findOne({ where: { role: UserRole.ADMIN } });
      
      if(isAdminHas){
        throw new CustomException('Admin user already exist. Cannot create another admin',409)
      }
      const existingUser = await this.userRepository.findOne({
        where: [{ userName:CreateUserDTO.userName }, { email:CreateUserDTO.email }],
      });

      if (existingUser) {
        throw new CustomException('User with the same username or email already exists',409);
      }

      const hashedPassword = await bcrypt.hash(password, 10)
      const newUser = this.userRepository.create({ userName, email,  password: hashedPassword,  role });
      return this.userRepository.save(newUser);
    } catch (error) {
      
      throw error; 
    }
  }

  async createUser( CreateUserDTO:CreateUserDTO): Promise<User> {
    try {
      const { userName, email, password, role } = CreateUserDTO;

      const existingUser = await this.userRepository.findOne({
        where: [{ userName:CreateUserDTO.userName }, { email:CreateUserDTO.email }],
      });

      if (existingUser) {
        throw new CustomException('username or email already exists',409);
      }

      const hashedPassword = await bcrypt.hash(password, 10)
      const newUser = this.userRepository.create({ userName, email,  password: hashedPassword,  role });
      return this.userRepository.save(newUser);
    } catch (error) {
      
      throw error; 
    }
  }

  async loginUser( loginUserDTO:loginUserDTO): Promise<User> {
    try {

      const existingUser = await this.userRepository.findOne({ 
        where: [ {email:loginUserDTO.email}]
      });

    if (!existingUser) {
      throw new CustomException('Invalid credentials',400);
    }

    const isPasswordValid = await bcrypt.compare(loginUserDTO.password, existingUser.password);

    if (!isPasswordValid) {
      throw new CustomException('Invalid credentials',400);
    }
    return existingUser;
    
  } catch (error) {
      
      throw error; 
    }
  }

   async logoutUser( ) {
    try {

       return { message: 'Signout successful' };
    
  } catch (error) {
      
      throw error; 
    }
  }

  
}