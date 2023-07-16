import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
} from "typeorm";
import { Todo } from "./Todo";

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Todo, (todo) => todo.tags)
  todos: Todo[];
}
