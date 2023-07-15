import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

import Factory from "./class/Factory";

AppDataSource.initialize()
  .then(async () => {
    const userProfile = Factory.userProfile();
    const user = Factory.user();
    user.profile = userProfile;

    await AppDataSource.manager.save(userProfile);
    await AppDataSource.manager.save(user);

    const users = await AppDataSource.manager.find(User, {
      relations: ["profile"],
    });
    console.log(users);
  })
  .catch((error) => console.log(error));
