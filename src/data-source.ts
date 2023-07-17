import "reflect-metadata";
import path = require("path");
import { DataSource } from "typeorm";

const sqlitePath = path.resolve(__dirname, "../database.sqlite");

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: sqlitePath,
  synchronize: true,
  logging: false,
  entities: ["src/entity/*.ts"],
  migrations: [],
  subscribers: [],
});
