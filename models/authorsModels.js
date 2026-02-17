import { sql } from "../serverConnection.js";

// post new author

export const postNewAuthorM = async (newAuthor) => {
  const { name, birthdate, biography } = newAuthor;

  const author = { name, birthdate, biography };

  const authorPost = await sql`
    insert into "authors" ${sql(author, "name", "birthdate", "biography")}
    returning *
    `;
  return authorPost[0];
};
