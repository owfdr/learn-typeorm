import Factory from "./class/Factory";
import { User } from "./entity/User";
import { AppDataSource } from "./data-source";
import { Todo } from "./entity/Todo";

(async () => {
  await AppDataSource.initialize();

  const todo = Factory.todo();
  const tagA = Factory.tag();
  const tagB = Factory.tag();

  todo.tags = [tagA, tagB];

  // this order is really important
  await AppDataSource.manager.save(tagA);
  await AppDataSource.manager.save(tagB);
  await AppDataSource.manager.save(todo);

  console.log(await AppDataSource.manager.find(Todo, { relations: ["tags"] }));
})();
