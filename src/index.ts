import Factory from "./class/Factory";
import { User } from "./entity/User";
import { UserProfile } from "./entity/UserProfile";
import { AppDataSource } from "./data-source";

(async () => {
  await AppDataSource.initialize();
  const userRepository = AppDataSource.getRepository(User);
  const userProfileRepository = AppDataSource.getRepository(UserProfile);

  const userProfile = Factory.userProfile();
  const user = Factory.user();

  // user.profile = userProfile;
  userProfile.user = user;

  await userRepository.save(user);
  await userProfileRepository.save(userProfile); // This order matters

  const userWithProfile = await userRepository.find({ relations: ["profile"] });
  console.log(userWithProfile);
})();
