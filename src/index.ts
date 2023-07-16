import Factory from "./class/Factory";
import { User } from "./entity/User";
import { AppDataSource } from "./data-source";

(async () => {
  await AppDataSource.initialize();
  const userRepository = AppDataSource.getRepository(User);

  const user = Factory.user();
  const profile = Factory.userProfile();

  user.profile = profile;
  await userRepository.save(user);

  user.profile.nationality = "Japan";
  await userRepository.save(user);

  console.log(
    await userRepository.find({
      relations: ["profile"],
    })
  );
})();
