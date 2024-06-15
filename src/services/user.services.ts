import User from "../models/user.model";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const registerUserService = async (userDetails: any) => {
    const isUserExist = await User.findOne({ where: { email: userDetails.email } });
    if (isUserExist) {
        return {
            error: true,
            message: "User Already Exist"
        };
    }
    if (!isUserExist) {
        const hashedPassword = dcryptPassword(userDetails.password);
        const newUser = await User.create({ ...userDetails, password: hashedPassword });
        return {
            error: false,
            message: newUser
        }
    }
}

const dcryptPassword = (password: string) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt)
}

const comparePassword = (password: string, hashedPassword: string) => {
    return bcrypt.compareSync(password, hashedPassword);
}

const loginUserService = async (userCredential: any) => {
    const findUser: any = await User.findOne({ where: { email: userCredential.email } });
    if(findUser){
        const isPasswordMatched = comparePassword(userCredential.password, findUser.password);
        console.log(isPasswordMatched)
        if(isPasswordMatched){
            const token = jwt.sign({ id: findUser.id} , process.env.JWT_PAYLOAD || "Payload");
            return{
                error: false,
                message: token
            }
        }
        if(!isPasswordMatched){
            return{
                error: true,
                message: "Email or Password Incorrect"
            }
        }
    }
    if(!findUser){
        return {
            error: true,
            message: "User not Found"
        }
    }
}

export default {
    registerUserService,
    loginUserService
}