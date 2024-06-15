import express, {Express} from 'express';
import userRoutes from './routes/user.routes';

const app: Express = express();

app.use(express.json());

app.use(userRoutes)

app.listen(3000, () => {
    console.log("Server is running on 3000");
});