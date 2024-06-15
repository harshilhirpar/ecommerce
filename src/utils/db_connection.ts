import sequelize_connection from "../DB";

const checkSequelizeConnection = async () => {
    try {
        await sequelize_connection.authenticate();
        console.log("DB Connected");
    } catch (error) {
        console.log("Error hhh", error);
    }
}

export default checkSequelizeConnection;