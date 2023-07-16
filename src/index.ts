import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

(async () => {
  await AppDataSource.initialize();
  const userRepository = AppDataSource.getRepository(User);

  const userToUpdate = await userRepository.findOneBy({
    id: 1,
  });
  userToUpdate.firstName = "Timber";
  await userRepository.save(userToUpdate);

  console.log(
    "User has been updated: ",
    await userRepository.findOneBy({ id: 1 })
  );
})();
