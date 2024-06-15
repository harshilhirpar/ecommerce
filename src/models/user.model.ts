import { DataTypes } from "sequelize";
import sequelize_connection from "../DB";

const User = sequelize_connection.define(
    'User',
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.ENUM,
            values: ['USER', 'ADMIN', 'SELLER']
        }
    }
)

export default User;