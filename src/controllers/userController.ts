import { Request, Response } from "express";
import { UserRepository } from "../dataLayer/userRepository"
import { IUser } from '../dataLayer/userSchema';

export const getUsers = async (req: any, res: any) => {
    try {
        const userRepository = new UserRepository();
        const users = await userRepository.getAllUsers();
        res.json(users);
    } catch (error) {
        res.send(500);
    }
}

export const createUser = async (req: Request, res: Response) => {
    try {
        const userRepository = new UserRepository();
        const user = req.body as IUser;
        await userRepository.createUser(user);
        res.send(200);
    } catch (error) {
        res.send(500);
    }
}