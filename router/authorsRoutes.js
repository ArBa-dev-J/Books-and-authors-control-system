import express from "express";
import { postNewAuthorC } from "../controller/authorsController.js";

const authorsRoutes = express.Router();

// using routes

authorsRoutes.route("/").post(postNewAuthorC);

export default authorsRoutes;