import { postNewBookM } from "../models/booksModels.js";

// upload books to db

export const postNewBookC = async (req, res) => {
  try {
    const newBook = req.body;

    if (!newBook.title || !newBook.authorId) {
      res.status(400).json({
        status: "fail",
        message: `Error, missing info`,
      });
      return;
    }

    const book = await postNewBookM(newBook);
    res.status(201).json({
      status: "success",
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: `Error writing data to db, ${error} `,
    });
  }
};
