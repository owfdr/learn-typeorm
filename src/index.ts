import { User } from "./entity/User";
import { AppDataSource } from "./data-source";
import Factory from "./class/Factory";

(async () => {
  await AppDataSource.initialize();

  const user = Factory.user();
  // user.profile = Factory.userProfile();
  await AppDataSource.manager.save(user);

  const users = await AppDataSource.getRepository(User)
    .createQueryBuilder("user")
    .leftJoinAndSelect("user.profile", "profile")
    // .innerJoinAndSelect("user.profile", "profile")
    .leftJoinAndSelect("user.todos", "todo")
    .where("user.sex = :sex")
    .orderBy("user.id", "DESC")
    .setParameters({ sex: "male" })
    .getMany();

  console.log(users);
})();
