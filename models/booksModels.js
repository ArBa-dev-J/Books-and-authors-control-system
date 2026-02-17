import { sql } from "../serverConnection.js";

// post new book

export const postNewBookM = async (newBook) => {
  const { title, summery, authorId } = newBook;

  const book = { title, summery, authorId };

  const bookList = await sql`
insert into books ${sql(book, "title", "summery", "authorId")}
returning *
`;
  return bookList[0];
};
