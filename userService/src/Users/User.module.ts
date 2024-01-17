import { Module } from '@nestjs/common';
import { UserService } from './User.service';
import {UserController} from './User.controller'
import {User} from '../schema/user.entity'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}