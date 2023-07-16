import Factory from "./class/Factory";
import { User } from "./entity/User";
import { AppDataSource } from "./data-source";

(async () => {
  await AppDataSource.initialize();
  const userRepository = AppDataSource.getRepository(User);

  // using find method
  console.log(
    "All users: ",
    await userRepository.find({
      relations: ["profile"],
    })
  );

  // using query builder
  console.log(
    "All users: ",
    await userRepository
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.profile", "profile")
      .getMany()
  );
})();
