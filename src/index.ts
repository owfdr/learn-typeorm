import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

(async () => {
  await AppDataSource.initialize();
  const userRepository = AppDataSource.getRepository(User);

  const [userToRemove] = await userRepository.find({
    order: { id: "ASC" },
    take: 1,
  });
  console.log(userToRemove);

  await userRepository.remove(userToRemove);
})();
