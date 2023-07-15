import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class UserProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nationality: string;

  @Column()
  bio: string;
}
