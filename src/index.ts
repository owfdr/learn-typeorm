import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

(async () => {
  await AppDataSource.initialize();
  const userRepository = AppDataSource.getRepository(User);

  console.log("All users: ", await userRepository.find());

  console.log(
    "First user: ",
    await userRepository.findOneBy({
      id: 1,
    })
  );

  console.log(
    "Robert: ",
    await userRepository.findOneBy({
      firstName: "Robert",
    })
  );

  console.log(
    "All male users: ",
    await userRepository.findBy({
      sex: "male",
    })
  );

  const [allFemaleUsers, allFemaleUsersCount] =
    await userRepository.findAndCountBy({
      sex: "female",
    });
  console.log("All female users: ", allFemaleUsers);
  console.log("Female users count: ", allFemaleUsersCount);
})();
