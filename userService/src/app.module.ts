import { Module } from '@nestjs/common';
import { AuthModule } from './Authentication/auth.module';
import { TypeOrmConfigModule } from './db/typeorm/database.module'
import { AuthorModule } from './Authorization/author.module';
import { UserModule } from './Users/User.module';

@Module({
  imports: [TypeOrmConfigModule,AuthModule,AuthorModule,UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
