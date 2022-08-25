import express from "express";
import database from "./infra/tipsDb.js";
import Tips from "./controller/tipsController.js";

const app = express();
app.use(express.json());

Tips(app, database);

app.listen(3200, console.log("running on port 3200"));
export default app;
