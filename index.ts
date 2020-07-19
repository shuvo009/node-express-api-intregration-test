
import * as app from "./server"
import databaseConnect from "./dataLayer/databaseConnect";

const dbConnectionString: string = "mongodb://dev_admin:159!QAZ@ds115768.mlab.com:15768/shopway_dev"
databaseConnect(dbConnectionString);
app.listen(3000)