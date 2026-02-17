import { body } from "express-validator";

const validateNewAuthors = [
  body().notEmpty().withMessage("Must contain data"),

  body("name")
    .isString()
    .withMessage("name must be a string")
    .isLength({ min: 2 })
    .withMessage("Atleast 2 chars"),

  body("birthdate")
    .isDate()
    .withMessage("Must be a date")
    .notEmpty()
    .withMessage("Must have birthdate"),

  body("biography").isString().withMessage("Must be a string"),
];

export default validateNewAuthors;
