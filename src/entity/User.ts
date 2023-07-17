import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  Relation,
  OneToMany,
} from "typeorm";
import { UserProfile } from "./UserProfile";
import { Todo } from "./Todo";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
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

  @OneToMany(() => Todo, (todo) => todo.user, {
    cascade: true,
  })
  todos: Todo[];
}
