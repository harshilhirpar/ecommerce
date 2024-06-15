import { NextFunction, Request, Response } from "express";
import userServices from "../services/user.services";

const registerUserController = async (req: Request, res: Response, next: NextFunction) => {
    const userDetails = req.body;
    let error, message = await userServices.registerUserService(userDetails);
    if (error) {
        res.status(400).send({
            message
        })
    }
    if (!error) {
        res.status(201).send({
            message: "User Created",
            data: message
        })
    }
}

const loginUserController = async (req: Request, res: Response, next: NextFunction) => {
    const userCredential = req.body;
    let error, message = await userServices.loginUserService(userCredential);
    if (error) {
        res.status(400).send({
            message
        })
    }
    if (!error) {
        res.status(201).send({
            message: "User LoggedIn",
            data: message
        });
    }
}

export default {
    registerUserController,
    loginUserController
}