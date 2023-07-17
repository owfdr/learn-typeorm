import { AppDataSource } from "./data-source";
import { Node } from "./entity/Node";

(async () => {
  await AppDataSource.initialize();
  await AppDataSource.manager.clear(Node);

  const root = new Node();
  root.name = "root";
  await AppDataSource.manager.save(root);

  const task = new Node();
  task.name = "task";
  task.parent = root;
  await AppDataSource.manager.save(task);

  const todo = new Node();
  todo.name = "todo";
  todo.parent = root;
  await AppDataSource.manager.save(todo);

  const learnCalculus = new Node();
  learnCalculus.name = "learn calculus";
  learnCalculus.parent = task;
  await AppDataSource.manager.save(learnCalculus);

  const nodes = await AppDataSource.manager
    .getTreeRepository(Node)
    .findDescendantsTree(root, { depth: 1 });
  console.log(nodes);
})();
