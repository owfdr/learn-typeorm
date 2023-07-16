import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { User } from "./User";
import { Tag } from "./Tag";

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @Column({ default: false })
  done: boolean;

  @ManyToOne(() => User, (user) => user.todos)
  user: User;

  @ManyToMany(() => Tag, (tag) => tag.todos)
  @JoinTable()
  tags: Tag[];
}
