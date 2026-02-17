import express from "express";
import bodyParser from "body-parser";
import authorsRoutes from "./router/authorsRoutes.js";
import booksRoutes from "./router/booksRouter.js";

const app = express();

// create application/json parser
const jsonParser = bodyParser.json();

app.use("/api/v1/authors", jsonParser, authorsRoutes);
app.use("/api/v1/books", jsonParser, booksRoutes);

export default app;
