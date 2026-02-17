import { postNewAuthorM, authorGetM } from "../models/authorsModels.js";

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

// get authors with their book titles from db

export const authorGetC = async (req, res) => {
  try {
    const authors = await authorGetM();

    if (authors.length === 0) {
      return res.status(404).json({
        status: "fail",
        message: "No authors found",
      });
    }

    res.status(200).json({
      status: "success",
      data: authors,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};
