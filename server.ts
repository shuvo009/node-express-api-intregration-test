import express = require('express');
import bodyParser from "body-parser";
import { createUser, getUsers } from "./controllers";

const app: express.Application = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/users', getUsers);
app.post('/create', createUser);

export = app;