import { IUser } from "../schemas/userSchema";
import userSchema from "../schemas/userSchema";

export class UserRepository {
    async getAllUsers(): Promise<IUser[]> {
        return new Promise((resolve, reject) => {
            userSchema.find().exec((err: any, users: IUser[]) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(users);
                }
            });
        })
    }

    async createUser(user: IUser): Promise<void> {
        const userModel = new userSchema(user);
        await userModel.save();
    }
}