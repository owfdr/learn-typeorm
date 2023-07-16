import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  Relation,
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

  @OneToOne(() => UserProfile, (profile) => profile.user, {
    nullable: true,
    cascade: true,
  })
  @JoinColumn()
  profile: Relation<UserProfile>;
}
