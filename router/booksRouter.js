import express from "express";
import { postNewBookC } from "../controller/booksController.js";

const booksRoutes = express.Router();

// using routes

booksRoutes.route("/").post(postNewBookC);

export default booksRoutes;