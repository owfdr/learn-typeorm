import Factory from "./class/Factory";
import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

(async () => {
  await AppDataSource.initialize();
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.save(Factory.user("male"));
  console.log(user);
})();
