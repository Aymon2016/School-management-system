

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { User } from 'src/schema/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "12345",
      database: "authdb",
      entities: [User],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class TypeOrmConfigModule {
}
