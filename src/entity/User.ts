import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { UserProfile } from "./UserProfile";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  sex: string;

  @OneToOne(() => UserProfile, { nullable: true })
  @JoinColumn()
  profile: UserProfile;
}
