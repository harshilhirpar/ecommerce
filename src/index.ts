import express, {Express} from 'express';
import userRoutes from './routes/user.routes';
import checkSequelizeConnection from './utils/db_connection';
import db from './DB/db_init';

const app: Express = express();

app.use(express.json());

app.use(userRoutes);

app.listen(3000, async () => {
    await checkSequelizeConnection();
    db.sequelize.sync({ force: false, logging: false});
    console.log("Server is running on 3000");
});