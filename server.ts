import express = require('express');
import databaseConnect from "./dataAccess/databaseConnect"
import { UserRepository } from "./dataAccess/userRepository"
import { IUser } from './schemas/userSchema';
const app: express.Application = express();
import bodyParser from "body-parser";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/users', async (req: any, res) => {
    const userRepository = new UserRepository();
    const users = await userRepository.getAllUsers();
    res.json(users);
});

app.post('/create', async (req, res) => {
    const userRepository = new UserRepository();
    const user = req.body as IUser;
    await userRepository.createUser(user);
    res.json({ ok: "" });
});

const dbConnectionString: string = "mongodb://dev_admin:159!QAZ@ds115768.mlab.com:15768/shopway_dev"
//databaseConnect(dbConnectionString);

export = app;