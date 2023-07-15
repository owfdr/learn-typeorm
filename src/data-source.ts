import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { UserProfile } from "./entity/UserProfile";
import path = require("path");

const sqlitePath = path.resolve(__dirname, "../database.sqlite");

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: sqlitePath,
  synchronize: true,
  logging: false,
  entities: [User, UserProfile],
  migrations: [],
  subscribers: [],
});
