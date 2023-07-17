import { Tesla } from "./entity/Tesla";
import { Toyota } from "./entity/Toyota";
import { AppDataSource } from "./data-source";
import { Vehicle } from "./entity/Vehicle";

(async () => {
  await AppDataSource.initialize();

  const bike = new Vehicle();
  bike.name = "BMX";
  await AppDataSource.manager.save(bike);

  const tesla = new Tesla();
  tesla.name = "Tesla Model 3";
  tesla.isElectric = true;
  await AppDataSource.manager.save(tesla);

  const toyota = new Toyota();
  toyota.name = "Toyota Corolla";
  toyota.isAffordable = true;
  await AppDataSource.manager.save(toyota);

  const vehicles = await AppDataSource.manager.find(Vehicle);
  console.log(vehicles);
})();
