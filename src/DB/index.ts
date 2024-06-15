import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();


const db_name: string = process.env.DB_NAME || "db_name";
const db_username: string = process.env.DB_USERNAME || "db_username";
const db_password: string = process.env.DB_PASSWORD || "db_password";
const db_host: string = process.env.DB_HOST || "db_host";

const sequelize_connection: Sequelize = new Sequelize(
    db_name,
    db_username,
    db_password,{
        host: db_host,
        dialect: 'postgres'
    }
)

export default sequelize_connection;