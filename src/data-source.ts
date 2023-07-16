import "reflect-metadata";
import path = require("path");
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { UserProfile } from "./entity/UserProfile";
import { Image } from "./entity/Image";
import { Todo } from "./entity/Todo";

const sqlitePath = path.resolve(__dirname, "../database.sqlite");

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: sqlitePath,
  synchronize: true,
  logging: false,
  entities: [User, UserProfile, Image, Todo],
  migrations: [],
  subscribers: [],
});
