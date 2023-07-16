import Factory from "./class/Factory";
import { User } from "./entity/User";
import { AppDataSource } from "./data-source";

(async () => {
  await AppDataSource.initialize();
  const userRepository = AppDataSource.getRepository(User);

  const user = Factory.user();
  const todo1 = Factory.todo();
  const todo2 = Factory.todo();

  user.todos = [todo1, todo2];

  await userRepository.save(user);

  const users = await userRepository.find({ relations: ["todos"] });
  console.log(users);
})();
