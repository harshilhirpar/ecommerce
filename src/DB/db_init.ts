import { Sequelize } from "sequelize";
import sequelize_connection from ".";
import User from "../models/user.model";

const db: any = {};

db.sequelize = Sequelize;
db.sequelize = sequelize_connection;

db.user = User;

export default db;