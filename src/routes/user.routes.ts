import express from 'express';

class UserRoutes{
    userRouter;
    constructor(){
        this.userRouter = express.Router();
        this.initializeUserRouter()
    }

    initializeUserRouter(){
        this.userRouter.get('/', (request, response) => {
            response.send({
                message: "Works"
            })
        })
    }
}

export default new UserRoutes().userRouter;