import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  TableInheritance,
} from "typeorm";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
