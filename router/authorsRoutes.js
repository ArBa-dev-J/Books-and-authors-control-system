import express from "express";
import {
  postNewAuthorC,
  authorGetC,
  getAuthorsByIdC,
} from "../controller/authorsController.js";
import validate from "../validate/validate.js";
import validateNewAuthors from "../validate/validateNewAuthors.js";

const authorsRoutes = express.Router();

// using routes

authorsRoutes
  .route("/")
  .post(validateNewAuthors, validate, postNewAuthorC)
  .get(authorGetC);

authorsRoutes.route("/:id").get(getAuthorsByIdC);

export default authorsRoutes;
