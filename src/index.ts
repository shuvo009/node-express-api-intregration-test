
const app = require("./server");
import databaseConnect from "./dataLayer/databaseConnect";

const dbConnectionString: string = "mongodb://<username>:<password>@ds115768.mlab.com:15768/<database>"
databaseConnect(dbConnectionString);
app.listen(3000)
console.log("Server Started at 3000")