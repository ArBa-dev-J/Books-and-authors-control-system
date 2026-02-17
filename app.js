import express from "express";
import bodyParser from "body-parser";
import authorsRoutes from "./router/authorsRoutes.js";

const app = express();

// create application/json parser
const jsonParser = bodyParser.json();

app.use("/api/v1/authors", jsonParser, authorsRoutes);

export default app;
