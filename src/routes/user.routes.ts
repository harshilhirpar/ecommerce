import express, { Router } from 'express';
import userControllers from '../controllers/user.controllers';
import passport from '../middleware/auth.middleware';

const userRouters: Router = express.Router();

userRouters.post('/api/v1/register', userControllers.registerUserController);
userRouters.post('/api/v1/login', userControllers.loginUserController);
userRouters.get('/api', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.send({
        mes: "dvsdfsd"
    })
})
export default userRouters;