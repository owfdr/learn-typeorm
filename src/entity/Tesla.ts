import { Column, ChildEntity } from "typeorm";
import { Vehicle } from "./Vehicle";

@ChildEntity()
export class Tesla extends Vehicle {
  @Column()
  isElectric: boolean;
}
