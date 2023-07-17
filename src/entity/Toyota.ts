import { Column, ChildEntity } from "typeorm";
import { Vehicle } from "./Vehicle";

@ChildEntity()
export class Toyota extends Vehicle {
  @Column()
  isAffordable: boolean;
}
