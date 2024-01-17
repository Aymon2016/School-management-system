
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { UserRole } from '../common/enum/role.enum';
@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  userName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: UserRole, nullable:true })
  role: UserRole;
}


