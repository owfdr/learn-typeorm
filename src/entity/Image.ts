import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Blob } from "buffer";

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fileName: string;

  @Column()
  buffer: Buffer;
}
