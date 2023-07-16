import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class UserProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nationality: string;

  @Column()
  bio: string;

  @OneToOne(() => User, (user) => user.profile)
  user: User;
}
