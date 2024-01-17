import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import {AuthorController} from './author.controller'
import { User } from '../schema/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthorController],
  providers: [AuthorService],
})
export class AuthorModule {}