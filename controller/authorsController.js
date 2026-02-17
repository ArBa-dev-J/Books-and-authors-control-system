import { postNewAuthorM } from "../models/authorsModels.js";

// upload data to sql db

export const postNewAuthorC = async (req, res) => {
  try {
    const newAuthor = req.body;
    if (!newAuthor.name || !newAuthor.birthdate) {
      res.status(400).json({
        status: "fail",
        message: `Error, missing info`,
      });
      return;
    }

    const author = await postNewAuthorM(newAuthor);
    res.status(201).json({
      status: "success",
      data: author,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: `Error writing data to db, ${error} `,
    });
  }
};
