import { Request, Response } from "express";
import User, {IUser} from "../models/User";
import jwt from 'jsonwebtoken';

export const signup = async(req: Request, res: Response) => {

    try {
        const { username, email, password } = req.body;
        
        const user: IUser = new User({
            username,
            email,
            password,
        });

        user.password = await user.encryptPassword(password);

        const savedUser = await user.save();
        console.log(process.env.TOKEN_SECRET);
        const token: string = jwt.sign({_id: savedUser._id}, process.env.TOKEN_SECRET || 'TOKENTEST' );
        res.header('auth-token', token).json(savedUser);
        
    } catch (error) {
        console.error('there is an error ',error);
        res.status(400).json({status: 'error', message: error});
    }
};
export const signin = async(req: Request, res: Response) => {
    const user = await User.findOne({ email: req.body.email });
    
    if(!user) return res.status(400).json('Email or password wrong');
    const comparePassword: boolean = await user.validatePassword(req.body.password);
    if(!comparePassword) return res.status(400).json('password wrong');

    const token: string = jwt.sign({_id:user._id }, process.env.TOKEN_SECRET || 'TOKENTEST');

    res.header({'auth-token':token}).json(user);

};
export const profile = async(req: Request, res: Response) => {
    const user = await User.findById(req.userId);
    if(!user) return res.status(404).json("No user found");
    res.json(user);
};
